'use strict';

const largestProduct = require('../largest-product.js');

describe('Find the largestProduct from the array', () => {
  test('Should return 5 from arrayS[[1,1],[1,5],[1,1]]', () => {
    expect(largestProduct(arrayS[[1,1],[1,5],[1,1]])).toEqual(5);
  });
  test('Should return undefined from arrayS[[3,1],[Z,4],[8,9]]', () => {
    expect(largestProduct(arrayS[[3,1],[Z,4],[8,9]])).toEqual(undefined);
  });
  test('Should return 81 from arrayS[[3,1,2],[5,2,9],[1,2,9]]', () => {
    expect(largestProduct(arrayS[[3,1,2],[5,2,9],[1,2,9]])).toEqual(81);
  });
});
