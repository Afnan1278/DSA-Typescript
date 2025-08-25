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
 * Solution using HashMap - O(n) time complexity
 * 
 * create a map where each number will have it's frequency
 * create a variabe for max, update max if possible
 * at the end of loop return max

 Edge case: if arr length is 0
*/
export const mostFrequentElement = (arr: number[]): number | null => {

    if (arr.length === 0)
        return null

    const freqMap = new Map<number, number>()
    let maxFreq = 0
    let maxFreqNumber: number = arr[0]!  // We know arr[0] exists because length > 0

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i]!  // We know arr[i] exists because i < arr.length
        const currentCount = freqMap.get(currentElement) || 0
        const newCount = currentCount + 1

        freqMap.set(currentElement, newCount)
        console.log(currentElement, newCount, maxFreq)
        if (newCount > maxFreq) {
            maxFreq = newCount
            maxFreqNumber = currentElement
        }
    }
    return maxFreqNumber

}

