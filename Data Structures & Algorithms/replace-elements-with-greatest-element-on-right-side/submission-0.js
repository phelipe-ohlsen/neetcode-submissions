class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            const slicedArr = arr.slice(i + 1);
            arr[i] = Math.max(...slicedArr);
        }

        arr[arr.length - 1] = -1;

        return arr;
    }
}
