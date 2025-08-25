/**
 * Problem: Top K Frequent Elements
 *
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Time Complexity: O(n log k) using heap, O(n) using bucket sort
 * Space Complexity: O(n)
 */

/**
 * Solution using HashMap and Bucket Sort - O(n) time complexity
 */
export function topKFrequent(nums: number[], k: number): number[] {
    // Step 1: Count frequency of each element
    const frequencyMap = new Map<number, number>();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Create buckets where index represents frequency
    const buckets: number[][] = Array(nums.length + 1)
        .fill(null)
        .map(() => []);

    for (const [num, freq] of frequencyMap) {
        buckets[freq]?.push(num);
    }

    // Step 3: Collect k most frequent elements from buckets (right to left)
    const result: number[] = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i] && buckets[i]!.length > 0) {
            result.push(...buckets[i]!);
        }
    }

    return result.slice(0, k);
}

/**
 * Alternative solution using HashMap and Heap - O(n log k) time complexity
 */
export function topKFrequentHeap(nums: number[], k: number): number[] {
    // Count frequencies
    const frequencyMap = new Map<number, number>();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Convert to array and sort by frequency
    const frequencies = Array.from(frequencyMap.entries());
    frequencies.sort((a, b) => b[1] - a[1]);

    // Return top k elements
    return frequencies.slice(0, k).map(([num]) => num);
}
