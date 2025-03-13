# Blazor 랜더링 상태와 Js Component의 상호운용성 설명

1. Blazor의 랜더링 상태는 아래와 같다.
    * Pre Rendering
    * SSR
    * CSR

2. 각 랜더링 상태를 아래와 같이 설명한다.
   * Pre-Rendering : Blazor Server 또는 Web App에서 Server 호스팅일 경우 `@rendermode` 가 지정되지 않은 View Component는 모두 Pre-Renderinig이다.
   * SSR : Blazor Server 또는 Web App에서 Server 호스팅일 경우 서버에서 랜더링 하는 것을 의미하며 `@rendermode InteractiveAuto 또는 @rendermode InteractiveServer` 일 경우 적용된다.
   * CSR : Blazor WASM 프로젝트로 Server 또는 Web App에서 Client 일 경우, `@rendermode` 가 InteractiveWebAssembly일 경우 적용된다.

3. 호스팅 단위별 랜더링 상태는 아래와 같다.
   * Blazor Server : Pre-Rendering -> SSR
   * Blazor Server : (Pre-Rendering off) SSR
   * Blazor WASM : CSR
   * Blazor WEB APP : (Server) Pre-Rendering -> SSR
   * Blazor WEB APP : (WASM) Pre-Rendering -> CSR

4. blazor-js-component와 Pre-Rendering에 대한 상호 운용성
   (https://github.com/MackinnonBuck/blazor-js-components)
   * Pre-Rendering + blazor-js-component : 정상 동작
   * SSR + blazor-js-component : 동작 안함.
   * CSR + blazor-js-component : 동작 안함.

5. **예로 아래와 같다:**
   * ![pre-rendering.jpg](doc/pre-rendering.jpg)
   * ![ssr_or_csr.gif](doc/ssr_or_csr.gif)