class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let n = nums.length,
            k = 0;
        
        while (k < n) {
            if (nums[k] !== val) {
                k++;
            } else {
                nums[k] = nums[--n];
            }
        }

        return k;
    }
}
