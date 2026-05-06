class ListNode {
    constructor(public val: string = '', public next: ListNode | null = null, public prev: ListNode | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    private head: ListNode;
    private tail: ListNode;
    public current: ListNode | null;
    public home: ListNode | null;

    constructor(public homepage: string) {
        this.head = new ListNode();
        this.tail = new ListNode();
        this.home = new ListNode(homepage, this.tail, this.head);
        this.head.next = this.home;
        this.tail.prev = this.home;
        this.current = this.home;
    }

    visit(url: string): void {
        const newNode = new ListNode(url, this.tail, this.current);
        this.current.next = newNode;
        this.tail.prev = newNode;
        this.current = newNode;
    }

    back(steps: number): string {
        for (let i = 0; i < steps; i++) {
            if (this.current === this.home) return this.home.val;
            this.current = this.current.prev;
        }
        return this.current.val;
    }

    forward(steps: number): string {
        for (let i = 0; i < steps; i++) {
            if (this.current === this.tail.prev) {
                return this.current.val;
            }
            this.current = this.current.next;
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