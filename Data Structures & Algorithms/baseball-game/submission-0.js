class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const scores = [];

        for (const op of operations) {
            const el = Number(op);

            if (!Number.isNaN(el)) {
                scores.push(el);
            }

            if (op === "C") scores.pop();
            if (op === "D") {
                scores.push(scores[scores.length - 1] * 2)
            }
            if (op === "+") {
                scores.push(scores[scores.length - 1] + scores[scores.length - 2])
            }
        }

        let sum = 0;
        for (const score of scores) {
            sum += score;
        }
        return sum;
    }
}
