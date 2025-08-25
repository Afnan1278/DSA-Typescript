import { removeDuplicates } from './remove-duplicates';

describe('Remove Duplicates from Sorted Array', () => {
    describe('removeDuplicates', () => {
        test('should remove duplicates from sorted array and return new length', () => {
            const nums = [1, 1, 2, 2, 3, 4, 4, 5];
            const expectedLength = 5;
            const result = removeDuplicates(nums);

            expect(result).toBe(expectedLength);
            expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
        });

        test('should handle empty array', () => {
            const nums: number[] = [];
            const result = removeDuplicates(nums);

            expect(result).toBe(0);
            expect(nums).toEqual([]);
        });

        test('should handle array with single element', () => {
            const nums = [1];
            const result = removeDuplicates(nums);

            expect(result).toBe(1);
            expect(nums).toEqual([1]);
        });

        test('should handle array with no duplicates', () => {
            const nums = [1, 2, 3, 4, 5];
            const result = removeDuplicates(nums);

            expect(result).toBe(5);
            expect(nums).toEqual([1, 2, 3, 4, 5]);
        });

        test('should handle array with all same elements', () => {
            const nums = [1, 1, 1, 1, 1];
            const result = removeDuplicates(nums);

            expect(result).toBe(1);
            expect(nums.slice(0, result)).toEqual([1]);
        });

        test('should handle array with two different elements', () => {
            const nums = [1, 1, 2];
            const result = removeDuplicates(nums);

            expect(result).toBe(2);
            expect(nums.slice(0, result)).toEqual([1, 2]);
        });

        test('should handle negative numbers', () => {
            const nums = [-3, -3, -2, -1, -1, 0, 0, 1];
            const result = removeDuplicates(nums);

            expect(result).toBe(5);
            expect(nums.slice(0, result)).toEqual([-3, -2, -1, 0, 1]);
        });

        test('should handle array with consecutive duplicates', () => {
            const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
            const result = removeDuplicates(nums);

            expect(result).toBe(5);
            expect(nums.slice(0, result)).toEqual([0, 1, 2, 3, 4]);
        });

        test('should handle large numbers', () => {
            const nums = [1000, 1000, 2000, 3000, 3000, 4000];
            const result = removeDuplicates(nums);

            expect(result).toBe(4);
            expect(nums.slice(0, result)).toEqual([1000, 2000, 3000, 4000]);
        });

        test('should modify original array in-place', () => {
            const nums = [1, 1, 2, 3, 3];
            const originalArray = nums;
            const result = removeDuplicates(nums);

            // Should be the same reference (in-place modification)
            expect(nums).toBe(originalArray);
            expect(result).toBe(3);
            expect(nums.slice(0, result)).toEqual([1, 2, 3]);
        });

        test('should handle array starting with duplicates', () => {
            const nums = [1, 1, 1, 2, 3];
            const result = removeDuplicates(nums);

            expect(result).toBe(3);
            expect(nums.slice(0, result)).toEqual([1, 2, 3]);
        });

        test('should handle array ending with duplicates', () => {
            const nums = [1, 2, 3, 3, 3];
            const result = removeDuplicates(nums);

            expect(result).toBe(3);
            expect(nums.slice(0, result)).toEqual([1, 2, 3]);
        });

        test('should handle mixed pattern of duplicates', () => {
            const nums = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6];
            const result = removeDuplicates(nums);

            expect(result).toBe(6);
            expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5, 6]);
        });
    });
});
