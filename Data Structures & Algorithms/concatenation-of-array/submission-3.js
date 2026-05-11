class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const result = Array(nums.length * 2);

        for (let i = 0; i < nums.length; i++) {
            result[i] = result[i + nums.length] = nums[i];
        }

        return result;
    }
}
