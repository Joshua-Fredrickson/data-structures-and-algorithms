'use strict';

import treeIntersection from '../tree-intersection.js';

describe('testing #treeIntersection', () => {
  test('return correct shared values', () =>
    expect(treeIntersection('~~~~~~~INSERT 2 BINARY TREES HERE WITH SHARED VALUES 1 & 2~~~~~~~~~'))
      .toEqual([1,2]));
});