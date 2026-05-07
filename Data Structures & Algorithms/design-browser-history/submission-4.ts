class BrowserNode {
    constructor(public val: string = '', public next: BrowserNode | null = null, public prev: BrowserNode | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    private current: BrowserNode;

    constructor(homepage: string) {
        this.current = new BrowserNode(homepage);
    }

    visit(url: string): void {
        this.current.next = new BrowserNode(url, null, this.current);
        this.current = this.current.next;
    }

    back(steps: number): string {
        while (this.current.prev && steps > 0) {
            this.current = this.current.prev;
            steps--;
        }
        
        return this.current.val;
    }

    forward(steps: number): string {
        while (this.current.next && steps > 0) {
            this.current = this.current.next;
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