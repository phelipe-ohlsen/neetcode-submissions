class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let greatest = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const newGratest = Math.max(arr[i], greatest)
            arr[i] = greatest;
            greatest = newGratest
        }

        return arr;
    }
}
