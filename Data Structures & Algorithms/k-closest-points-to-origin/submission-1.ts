class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const distances = points.map(([x, y]) => ({
            point: [x, y],
            dist: x * x + y * y  // squared distance
        }));

        distances.sort((a, b) => a.dist - b.dist);

        return distances.slice(0, k).map(d => d.point);
    }
}
