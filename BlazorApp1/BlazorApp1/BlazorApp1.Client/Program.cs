using Blazr.RenderState.WASM;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

namespace BlazorApp1.Client;

class Program
{
    static async Task Main(string[] args)
    {
        var builder = WebAssemblyHostBuilder.CreateDefault(args);
        builder.Services.AddJSComponents();
        builder.AddBlazrRenderStateWASMServices();
        await builder.Build().RunAsync();
    }
}