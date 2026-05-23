class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxCount = 0;
        let count = 0;

        for (const n of nums) {
            count = n === 1 ? ++count : 0;
            maxCount = Math.max(maxCount, count);
        }

        return maxCount;
    }
}
