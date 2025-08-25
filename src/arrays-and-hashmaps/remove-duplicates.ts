/**
 * Remove Duplicates from Sorted Array
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates 
 * in-place such that each unique element appears only once. The relative order of 
 * the elements should be kept the same.
 * 
 * Since it is impossible to change the length of the array in some languages, you 
 * must instead have the result be placed in the first part of the array nums. 
 * More formally, if there are k elements after removing the duplicates, then the 
 * first k elements of nums should hold the final result.
 * 
 * Time Complexity: O(n) where n is the length of the array
 * Space Complexity: O(1) - only using constant extra space
 * 
 * @param nums - sorted array of integers
 * @returns the new length of the array after removing duplicates
 */
export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let toFillIdx = 0;

    for (let currentIdx = 1; currentIdx < nums.length; currentIdx++) {
        if (nums[currentIdx] !== nums[toFillIdx]) {
            toFillIdx++;
            nums[toFillIdx] = nums[currentIdx]!;
        }
    }

    // Optionally remove extra elements (not necessary for length result)
    nums.length = toFillIdx + 1;

    return toFillIdx + 1;
}
