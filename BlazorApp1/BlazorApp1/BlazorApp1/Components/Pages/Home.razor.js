// Module-level state can be declared here.

export default class extends BlazorJSComponents.Component {
    attach(blazor) {
        // Called when the JS component first gets added to the page.
        // You can use this to initialize JS component state and
        // call methods on the provided 'blazor' object.
        // For example:
        // blazor.addEventListener('enhancedload', ...);
        console.log("Component attached");
    }

    setParameters(...args) {
        // Called when the parent component re-renders.
        // You can use this to add event listeners to rendered elements
        // or modify content on the page.
        console.log("Component setParameters");
    }

    dispose() {
        // Called after the parent component gets disposed.
        // You can use this to perform additional cleanup logic.
        console.log("Component dispose");
    }
}