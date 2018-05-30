'use strict';

import repeatedWord from '../repeated-word';

describe('repeated word test searching for the first repeated word in a long string', () => {
  test('should return the', () =>
    expect(repeatedWord('the cat the dog')).toEqual('the'))
});
