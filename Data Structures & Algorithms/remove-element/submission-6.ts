class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let len = nums.length;
        let k = 0;

        while (k < len) {
            if (nums[k] === val) {
                len--;
                [nums[k], nums[len]] = [nums[len], nums[k]];
            } else {
                k++;
            }
        }

        return k;
    }
}
