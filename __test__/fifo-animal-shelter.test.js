'use strict';

describe('Test will take in a string of a cat or dog string', () => {
  test('sucess - testing for cat output', () => {
    expect('cat').toEqual({ name: 'kitty', species: 'cat'});
  });
  test('failure - testing for empty input', () => {
    expect(' ').toBeNull;
  });
  test('failure - testing input of dog', () => {
    expect('dog').toEqual({ name: 'bella', species: 'dog'});
  })
});