class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length;
        const newArray = new Array(2 * n);
        for (let i = 0; i < n; i++) {
            newArray[i] = newArray[i + n] = nums[i];
        }

        return newArray;
    }
}
