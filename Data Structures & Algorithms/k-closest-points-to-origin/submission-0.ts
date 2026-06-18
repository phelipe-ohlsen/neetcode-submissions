class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const distances = points.map(([x, y]) => {
            return {
                point: [x, y],
                distance: Math.sqrt(x*x + y*y)
            };
        });

        distances.sort((a, b) => a.distance - b.distance);

        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(distances[i].point);
        }

        return result;
    }
}
