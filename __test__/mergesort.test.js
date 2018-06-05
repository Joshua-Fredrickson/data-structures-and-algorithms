import mergeSort from '../mergesort';

describe('# MergeSort test returning a sorted integer array', () => {
  test('should return ordered array', () =>
    expect(mergeSort([5,2,1,3,4,6])).toEqual([1,2,3,4,5,6]));
  test('should return ordered array', () =>
    expect(mergeSort([5,20,541,3,47,6])).toEqual([3,5,6,20,47,541]));
  test('should return ordered array', () =>
    expect(mergeSort([1,2,3,2,1,3])).toEqual([1,1,2,2,3,3]));
});
