class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const scores = [];

        for (const op of operations) {
            if (op === 'C') {
                scores.pop();
            } else if (op === 'D') {
                scores.push(
                    scores[scores.length - 1] * 2
                );
            } else if (op === '+') {
                scores.push(
                    scores[scores.length - 1] + scores[scores.length - 2]
                );
            } else {
                scores.push(+op);
            }
        }


        return scores.reduce((a, b) => a + b, 0)
    }
}
