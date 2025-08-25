import { mergeSortedArrays } from './merge-sorted-arrays';

describe('Merge Sorted Arrays', () => {
    describe('mergeSortedArrays', () => {
        test('should merge two non-empty sorted arrays', () => {
            const arr1 = [1, 2, 3];
            const arr2 = [2, 5, 6];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([1, 2, 2, 3, 5, 6]);
        });

        test('should handle first array being empty', () => {
            const arr1: number[] = [];
            const arr2 = [1, 2, 3];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([1, 2, 3]);
        });

        test('should handle second array being empty', () => {
            const arr1 = [1, 2, 3];
            const arr2: number[] = [];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([1, 2, 3]);
        });

        test('should handle both arrays being empty', () => {
            const arr1: number[] = [];
            const arr2: number[] = [];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([]);
        });

        test('should handle arrays with single elements', () => {
            const arr1 = [1];
            const arr2 = [2];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([1, 2]);
        });

        test('should handle arrays with overlapping values', () => {
            const arr1 = [1, 3, 5, 7];
            const arr2 = [2, 4, 6, 8];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        });

        test('should handle arrays where one is completely smaller than the other', () => {
            const arr1 = [1, 2, 3];
            const arr2 = [4, 5, 6];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([1, 2, 3, 4, 5, 6]);
        });

        test('should handle arrays with duplicate elements', () => {
            const arr1 = [1, 1, 3, 3];
            const arr2 = [2, 2, 4, 4];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
        });

        test('should handle negative numbers', () => {
            const arr1 = [-3, -1, 1];
            const arr2 = [-2, 0, 2];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([-3, -2, -1, 0, 1, 2]);
        });

        test('should handle arrays of different lengths', () => {
            const arr1 = [1, 5];
            const arr2 = [2, 3, 4, 6, 7, 8];
            const result = mergeSortedArrays(arr1, arr2);

            expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        });
    });
});
