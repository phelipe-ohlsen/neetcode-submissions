class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let greatest = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const newGreatest = Math.max(greatest, arr[i]);
            arr[i] = greatest;
            greatest = newGreatest;
        }

        return arr;
    }
}
