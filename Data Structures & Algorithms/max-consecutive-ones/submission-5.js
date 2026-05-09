class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0,
            currCount = 0;


        for (const n of nums) {
            currCount = n === 1 ? ++currCount : 0;
            maxCount = Math.max(maxCount, currCount);
        }

        return maxCount;
    }
}
