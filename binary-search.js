'use strict';

const binarySearch = module.exports = {};

binarySearch.search = (array, searchKey) => {
  const wrong = -1;
  var right = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchKey) {
      right = i;
    }
  }
  if (right !== -1) {
    return right;
  } else {
    return wrong;
  }
};
