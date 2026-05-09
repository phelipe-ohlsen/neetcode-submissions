class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0,
            length = nums.length;
        
        while (k < length) {
            if (nums[k] === val) {
                nums[k] = nums[--length];
            } else { 
                k++;
            }
        }

        return k;
    }
}
