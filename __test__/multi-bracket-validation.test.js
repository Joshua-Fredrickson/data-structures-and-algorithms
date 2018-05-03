'use strict';

describe('testing the brackets', () => {
  test('Should return true', () => {
    expect(bracketValidation('a(3)a')).toEqual(true);
  });
  test('Should return false', () => {
    expect(bracketValidation('{(})')).toEqual(false);
  });
  test('Should return false', () => {
    expect(bracketValidation('a}f(}fdfd)j')).toEqual(false);
  });
});