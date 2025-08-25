/**
 * Problem: Merge Two Sorted Arrays
 *
 * Given two sorted arrays, merge them into a single sorted array.
 *
 * Example 1:
 * Input: arr1 = [1,2,3], arr2 = [2,5,6]
 * Output: [1,2,2,3,5,6]
 *
 * Example 2:
 * Input: arr1 = [1], arr2 = []
 * Output: [1]
 *
 * Example 3:
 * Input: arr1 = [], arr2 = [1]
 * Output: [1]
 *
 * Time Complexity: O(m + n) where m and n are lengths of the arrays
 * Space Complexity: O(m + n) for the merged array
 */

/**
 * Solution using Two Pointers approach
 */
/* 
  create one empty array. two pointers/indexes idx1 and idx2 start of each array. 
  while loop till any idx reaches length of its array. 
  array1 idx value greater than array2 idx than push array2 idx value to empty third array and increment idx2. 
  repeat this till while loop ends after while loop whichever array values remains push those to third array
*/
export const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
    if (arr1.length === 0 && arr2.length === 0)
        return []
    
    const merged: number[] = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i]! <= arr2[j]!) {
            merged.push(arr1[i]!);
            i++;
        } else {
            merged.push(arr2[j]!);
            j++;
        }
    }

    // Append remaining elements
    while (i < arr1.length) {
        merged.push(arr1[i]!);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]!);
        j++;
    }

    return merged;
}
