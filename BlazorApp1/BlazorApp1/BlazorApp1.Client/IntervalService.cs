namespace BlazorApp1.Client;

public class IntervalService: IDisposable
{
    private PeriodicTimer? _timer;
    private CancellationTokenSource? _cts;
    private Task? _timerTask;
    public event Action? OnTick; // 타이머 이벤트

    public void Start(TimeSpan interval)
    {
        Stop(); // 기존 타이머가 있다면 정리

        _cts = new CancellationTokenSource();
        _timer = new PeriodicTimer(interval);

        _timerTask = Task.Run(async () =>
        {
            try
            {
                while (await _timer.WaitForNextTickAsync(_cts.Token))
                {
                    OnTick?.Invoke(); // Blazor UI 업데이트
                }
            }
            catch (OperationCanceledException) { } // 정상적인 취소 처리
        });
    }

    public void Stop()
    {
        _cts?.Cancel();
        _cts?.Dispose();
        _timer?.Dispose();
        _cts = null;
        _timer = null;
        _timerTask = null;
    }

    public void Dispose()
    {
        Stop();
    }
}