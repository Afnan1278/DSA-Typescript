import { mostFrequentElement } from './top-k-frequent-elements';


describe('mostFrequentElement', () => {
    test('should return the most frequent element - case 1', () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const result = mostFrequentElement(nums);

        expect(result).toBe(1);
    });

    test('should return the most frequent element - single element', () => {
        const nums = [1];
        const result = mostFrequentElement(nums);

        expect(result).toBe(1);
    });

    test('should handle multiple occurrences', () => {
        const nums = [3, 5, 2, 3, 2, 2, 2, 5, 5];
        const result = mostFrequentElement(nums);

        expect(result).toBe(2); // 2 appears 4 times
    });

    test('should return null for empty array', () => {
        const nums: number[] = [];
        const result = mostFrequentElement(nums);

        expect(result).toBeNull();
    });

    test('should handle tie by returning first encountered max frequency element', () => {
        const nums = [1, 1, 2, 2];
        const result = mostFrequentElement(nums);

        expect(result).toBe(1); // Both have frequency 2, but 1 was encountered first
    });

    test('should handle array with all same elements', () => {
        const nums = [5, 5, 5, 5];
        const result = mostFrequentElement(nums);

        expect(result).toBe(5);
    });

    test('should handle array with all different elements', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = mostFrequentElement(nums);

        expect(result).toBe(1); // First element when all have same frequency
    });
});

