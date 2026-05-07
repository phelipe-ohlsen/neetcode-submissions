class BrowserHistory {
    private history: string[];
    private size: number;
    private currIndex: number;

    constructor(private homepage: string) {
        this.history = [homepage];
        this.size = 1;
        this.currIndex = 0;
    }

    visit(url: string): void {
        if (this.currIndex === this.size - 1) {
            this.history.push(url);
            this.size++;
        } else {
            this.history[this.currIndex + 1] = url;
            this.size = this.currIndex + 2;
        }
    }

    back(steps: number): string {
        const newIndex = Math.max(0, this.currIndex - steps);
        this.currIndex = newIndex;
        return this.history[newIndex];
    }

    forward(steps: number): string {
        const newIndex = Math.min(this.size - 1, this.currIndex + steps);
        this.currIndex = newIndex;
        return this.history[newIndex];

    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */