class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxCount = 0;
        let currCount = 0;

        for (const n of nums) {
            currCount = n === 1 ? ++currCount : 0;
            maxCount = Math.max(currCount, maxCount);
        }

        return maxCount;
    }
}
