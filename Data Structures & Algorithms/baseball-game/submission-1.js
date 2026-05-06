class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scoreArray = [];

        for (const op of operations) {
            if (op === "D") {
                scoreArray.push(scoreArray[scoreArray.length - 1] * 2);
            } else if (op === "C") {
                scoreArray.pop();
            } else if (op === "+") {
                scoreArray.push(scoreArray[scoreArray.length - 1] + scoreArray[scoreArray.length - 2])
            } else {
                scoreArray.push(+op)
            }
        }

        return scoreArray.reduce((a, b) => a + b, 0)
    }
}
