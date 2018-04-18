'use strict';

const binarySearch = require ('../binary-search');

describe('binary search test searching for a value that returns an index number', () => {
  test('should return -1', () =>
    expect(binarySearch.search([1,2,3,4], 9)).toEqual(-1))
  test('should return 5', () =>
    expect(binarySearch.search([3,4,5,6,7], 5)).toEqual(2))
  test('should return 11', () =>
    expect(binarySearch.search([11,12,13,14,15], 11)).toEqual(0))
});