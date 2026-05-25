class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const result = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            result[i] = result[i + nums.length] = nums[i];
        }

        return result;
    }
}
