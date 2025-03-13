# Blazor Rendering States and JS Component Interoperability

1. The rendering states in Blazor are as follows:  
   * **Pre-Rendering**  
   * **SSR (Server-Side Rendering)**  
   * **CSR (Client-Side Rendering)**  

2. Each rendering state is explained below:  
   * **Pre-Rendering**: In Blazor Server or Web App with server hosting, any View Component that does not have an explicitly specified `@rendermode` is considered Pre-Rendering.  
   * **SSR (Server-Side Rendering)**: In Blazor Server or Web App with server hosting, rendering occurs on the server when `@rendermode InteractiveAuto` or `@rendermode InteractiveServer` is specified.  
   * **CSR (Client-Side Rendering)**: In a Blazor WASM project, when hosted as either a Server or Web App on the client side, `@rendermode InteractiveWebAssembly` applies.  

3. The rendering state for each hosting model is as follows:  
   * **Blazor Server**: Pre-Rendering → SSR  
   * **Blazor Server (Pre-Rendering Off)**: SSR  
   * **Blazor WASM**: CSR  
   * **Blazor Web App (Server Mode)**: Pre-Rendering → SSR  
   * **Blazor Web App (WASM Mode)**: Pre-Rendering → CSR  

4. **Interoperability between blazor-js-component and Pre-Rendering**  
   (https://github.com/MackinnonBuck/blazor-js-components)  
   * **Pre-Rendering + blazor-js-component**: Works normally.  
   * **SSR + blazor-js-component**: Does not work.  
   * **CSR + blazor-js-component**: Does not work.  

5. **Example references:**  
   * ![pre-rendering.jpg](doc/pre-rendering.jpg)  
   * ![ssr_or_csr.gif](doc/ssr_or_csr.gif)