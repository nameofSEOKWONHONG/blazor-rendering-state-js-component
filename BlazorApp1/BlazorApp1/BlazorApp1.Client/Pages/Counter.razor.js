export default class extends BlazorJSComponents.Component {
    // Called when the component gets added to the page.
    attach() {
        this.currentCount = 0;
        this.label = undefined;
        this.ul = undefined;
        this.list = [];
    }

    // Called when the parent component re-renders.
    setParameters(incrementAmount, { button, label, ul }) {
        this.label = label;
        this.ul = ul;
        this.setEventListener(button, 'click', () => {
            this.currentCount += incrementAmount;            
            this.render();

            this.list.push({
                id: Date.now(),
                count: this.currentCount,
            })            
        });
        this.render();
        this.intervalId = setInterval(this.renderCount.bind(this), 1000);
    }

    // A helper to apply changes to DOM content.
    // Not called automatically.
    render() {
        this.label.innerText = `Current count: ${this.currentCount}`;
    }
    
    renderCount() {
        if (!this.ul) {
            console.error("UL element not exists!");
            return;
        }

        this.list.forEach(item => {
            console.log(`${item.id}, ${item.count}`);
            let li = document.createElement("li");
            li.textContent = `${item.id}, ${item.count}`;
            this.ul.appendChild(li);
        });
        this.list.length = 0;
    }

    dispose() {
        // Called after the parent component gets disposed.
        // You can use this to perform additional cleanup logic.
        this.label = undefined;
        this.ul = undefined;
        this.currentCount = undefined;
        this.list = undefined;
        clearInterval(this.intervalId);
    }
}