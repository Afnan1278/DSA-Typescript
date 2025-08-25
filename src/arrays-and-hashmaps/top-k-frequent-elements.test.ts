import { topKFrequent, topKFrequentHeap } from './top-k-frequent-elements';

describe('Top K Frequent Elements', () => {
  describe('topKFrequent (Bucket Sort)', () => {
    test('should return top k frequent elements - example 1', () => {
      const nums = [1, 1, 1, 2, 2, 3];
      const k = 2;
      const result = topKFrequent(nums, k);

      expect(result).toHaveLength(2);
      expect(result).toContain(1);
      expect(result).toContain(2);
    });

    test('should return top k frequent elements - example 2', () => {
      const nums = [1];
      const k = 1;
      const result = topKFrequent(nums, k);

      expect(result).toEqual([1]);
    });

    test('should handle multiple elements with same frequency', () => {
      const nums = [1, 2, 3, 4];
      const k = 2;
      const result = topKFrequent(nums, k);

      expect(result).toHaveLength(2);
    });

    test('should handle k equal to array length', () => {
      const nums = [1, 2, 3];
      const k = 3;
      const result = topKFrequent(nums, k);

      expect(result).toHaveLength(3);
      expect(result.sort()).toEqual([1, 2, 3]);
    });
  });

  describe('topKFrequentHeap (Heap Sort)', () => {
    test('should return top k frequent elements - example 1', () => {
      const nums = [1, 1, 1, 2, 2, 3];
      const k = 2;
      const result = topKFrequentHeap(nums, k);

      expect(result).toHaveLength(2);
      expect(result).toContain(1);
      expect(result).toContain(2);
    });

    test('should return top k frequent elements - example 2', () => {
      const nums = [1];
      const k = 1;
      const result = topKFrequentHeap(nums, k);

      expect(result).toEqual([1]);
    });
  });
});
