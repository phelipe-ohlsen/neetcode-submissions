class MinStack {
    private stack: number[];
    private min: number;

    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (!this.stack.length) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const pop = this.stack.pop();
        if (pop < 0) {
            this.min = this.min - pop;
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1] < 0 ? this.min : this.stack[this.stack.length - 1] + this.min ; 
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
