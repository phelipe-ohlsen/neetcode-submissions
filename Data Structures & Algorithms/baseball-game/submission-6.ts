class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const scores: number[] = [];

        for (const op of operations) {
            if (op === "+") {
                scores.push(
                    scores[scores.length - 1] + scores[scores.length - 2]
                );
            } else if (op === "D") {
                scores.push(
                    2 * scores[scores.length - 1]
                );
            } else if (op === "C") {
                scores.pop();
            } else {
                scores.push(+op);
            }
        }

        return scores.reduce((acc, curr) => curr + acc, 0);
    }
}
