'use strict';

const shiftArray = module.exports = {};

shiftArray.shifting = (arr, newValue) => {
  const len = arr.length;
  let mid = Math.floor(len / 2);
  let temp = arr[mid];
  arr[mid] = newValue;

  if(len % 2 !== 0) {
    mid = Math.floor(len / 2) -1;
  };

  for (let i = mid + 1; i <= len; i++) {
    let otherTemp = arr[i];
    arr[i] = temp;
    temp = otherTemp;
  }
  return arr;
}
