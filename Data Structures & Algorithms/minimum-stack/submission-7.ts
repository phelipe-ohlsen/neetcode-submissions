class MinStack {
    private array: number[];
    private min: number;

    constructor() {
        this.array = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.array.length === 0) {
            this.min = val;
            this.array.push(0);
        } else {
            this.array.push(val - this.min);
            if (val < this.min) {
                this.min = val;
            }
        }

    }

    /**
     * @return {void}
     */
    pop(): void {
        const pop = this.array.pop();
        if (pop < 0) {
            this.min = this.min - pop;
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        const n = this.array[this.array.length - 1];
        return n < 0 ? this.min : n + this.min;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
