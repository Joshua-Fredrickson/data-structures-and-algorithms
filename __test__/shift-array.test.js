'use strict';

const shiftArray = require('../shift-array.js');

describe('shiftArray module test', () => {
  test('Should return [1,2,3,4,5]', () => {
    expect(shiftArray.shifting([1,2,4,5], 3)).toEqual([1,2,3,4,5]);
  });
  test('Should return [10,23,55,2,167]', () => {
    expect(shiftArray.shifting([10,23,2,167], 55)).toEqual([10,23,55,2,167]);
  });
  test('Should return [1,2,3,4,5,6]', () => {
    expect(shiftArray.shifting([1,2,3,5,6], 4)).toEqual([1,2,3,4,5,6]);
  });
});
