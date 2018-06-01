'use strict';

import repeatedWord from '../repeated-word';

describe('repeated word test searching for the first repeated word in a long string', () => {
  test('testing for typeof string', () =>
    expect(repeatedWord('the cat the dog')).toEqual(typeof 'string'));
  test('should return the', () =>
    expect(repeatedWord('the cat the dog')).toEqual('the'));
    expect(repeatedWord('In the beginning was the Word, and the Word was with God, and the Word' +
      ' was God. He was in the beginning with God. All things were made through him, and without him' +
      ' was not any thing made that was made. In him was life, and the life was the light of men. ' +
      'The light shines in the darkness, and the darkness has not overcome it.')).toEqual('the');
});
