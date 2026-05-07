class BrowserHistory {
    private history: string[];
    private size: number;
    private currentIndex: number;

    constructor(homepage: string) {
       this.history = [homepage];
       this.size = 1;
       this.currentIndex = 0;
    }

    visit(url: string): void {
        if (this.currentIndex === this.history.length - 1) {
            this.history.push(url);
            this.currentIndex++;
            this.size++;
        } else {
            this.history[this.currentIndex + 1] = url;
            this.currentIndex++;
            this.size = this.currentIndex + 1;
        }
    }

    back(steps: number): string {
        this.currentIndex = Math.max(0, this.currentIndex - steps);
        return this.history[this.currentIndex];
    }

    forward(steps: number): string {
        this.currentIndex = Math.min(this.size - 1, this.currentIndex + steps);
        return this.history[this.currentIndex];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */