class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let response = 0,
            count = 0;
        
        for (const num of nums) {
            count = num === 1 ? ++count : 0;
            response = Math.max(count, response)
        }

        return response;
    }
}
