/**
 * Utility functions for the DSA library
 */

/**
 * Creates a range of numbers from start to end (exclusive)
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, i) => start + i);
}

/**
 * Swaps two elements in an array
 */
export function swap<T>(arr: T[], i: number, j: number): void {
  if (i >= 0 && i < arr.length && j >= 0 && j < arr.length) {
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
}

/**
 * Measures execution time of a function
 */
export function measureTime<T>(fn: () => T): { result: T; time: number } {
  const start = Date.now();
  const result = fn();
  const end = Date.now();
  return { result, time: end - start };
}

/**
 * Creates a deep copy of an object
 */
export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
