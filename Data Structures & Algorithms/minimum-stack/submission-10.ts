class MinStack {
    private min: number;
    private stack: number[];

    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length === 0) {
            this.min = val;
            this.stack.push(0);
        } else {
            this.stack.push(val - this.min);
            this.min = Math.min(val, this.min);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const pop = this.stack.pop();
        if (pop <= 0) {
            this.min = this.min - pop;
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        const el = this.stack[this.stack.length - 1];

        if (el <= 0) return this.min;
        return this.stack[this.stack.length - 1] + this.min;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
