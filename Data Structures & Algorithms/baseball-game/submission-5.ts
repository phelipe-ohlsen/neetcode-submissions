class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const score = [];

        for (const op of operations) {
            if (op === "+") {
                score.push(
                    score[score.length - 1] + score[score.length - 2]
                );
            } else if (op === "D") {
                score.push(
                    score[score.length - 1] * 2
                );
            } else if (op === "C") {
                score.pop();
            } else {
                score.push(+op);
            }

        }

        return score.reduce((a, b) => a + b, 0);
    }
}
