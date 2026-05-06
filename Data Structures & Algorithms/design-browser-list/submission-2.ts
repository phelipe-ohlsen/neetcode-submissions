class HistoryNode {
    constructor(public val: string, public next: HistoryNode | null = null, public prev: HistoryNode | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    public current: NonNullable<HistoryNode>;

    constructor(public homepage: string) {
        this.current = new HistoryNode(homepage);
    }

    visit(url: string): void {
        const newNode = new HistoryNode(url, null, this.current);
        this.current.next = newNode;
        this.current = this.current.next;
    }

    back(steps: number): string {
        while (this.current.prev && steps > 0) {
            this.current = this.current.prev
            steps--;
        }

        return this.current.val;
    }

    forward(steps: number): string {
        while (this.current.next && steps > 0) {
            this.current = this.current.next
            steps--;
        }

        return this.current.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */