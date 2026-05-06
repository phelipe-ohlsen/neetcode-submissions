class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0,
            count = 0;

        for (const num of nums) {
            count = num === 1 ? ++count : 0
            max = Math.max(max, count)
        }

        return max;
    }
}
