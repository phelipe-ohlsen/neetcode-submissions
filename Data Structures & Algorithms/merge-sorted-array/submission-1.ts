class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        if (m === nums1.length || !n) return;

        for (let i = m, j = 0; i < nums1.length && j < nums2.length; i++, j++) {
            nums1[i] = nums2[j]
        }

        this.mergeSort(nums1, 0, nums1.length - 1);
    }
    mergeSort(array: number[], start: number, end: number) {
        if (end - start + 1 <= 1) return;

        const middle = Math.floor((start + end) / 2);

        this.mergeSort(array, start, middle);
        this.mergeSort(array, middle + 1, end);

        this.mergeSubArrays(array, start, middle, end);
    }
    mergeSubArrays(array: number[], start: number, middle: number, end: number) {
        const length1 = middle - start + 1;
        const length2 = end - middle;

        const array1 = new Array(length1);
        const array2 = new Array(length2);

        for (let i = 0; i < length1; i++) {
            array1[i] = array[i + start];
        }

        for (let i = 0; i < length2; i++) {
            array2[i] = array[i + middle + 1]
        }

        let i = 0;
        let j = 0;
        let k = start;

        while (i < length1 && j< length2) {
            if (array1[i] <= array2[j]) {
                array[k] = array1[i];
                i++;
            } else {
                array[k] = array2[j]
                j++;
            }
            k++;
        }

        while (i < length1) {
            array[k] = array1[i];
            k++;
            i++;
        }

        while (i < length2) {
            array[k] = array2[j];
            k++;
            j++;
        }
    }
}
