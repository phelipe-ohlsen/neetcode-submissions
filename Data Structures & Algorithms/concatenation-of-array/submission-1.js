class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        for (let k = 1; k <= 2; k++) {
            for (const num of nums) {
                ans.push(num);
            }
        }
        return ans;
    }
}
