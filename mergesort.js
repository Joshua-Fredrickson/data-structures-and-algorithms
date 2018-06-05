'use strict';

const mergeSort = (array) => {
  let length = array.length;
  if(length < 2)
    return array;
  let middleValue = Math.floor(length/2);
  let leftSide = array.slice(0, middleValue);
  let rightSide = array.slice(middleValue);

  return _merge(mergeSort(leftSide), mergeSort(rightSide));
}

const  _merge = (leftArray, rightArray) => {
  let solution = [];
  let leftLength = leftArray.length;
  let rightLength = rightArray.length;
  let leftCounter = 0;
  let rightCounter = 0;

  while(0 < leftLength && 0 < rightLength) {
    if(leftArray[leftCounter] < rightArray[rightCounter]) {
      solution.push(leftArray[leftCounter]);
      leftCounter++;
    }
    solution.push(rightArray[rightCounter]);
    rightCounter++;
  }
  return solution.concat(leftArray.slice(leftCounter)).concat(rightArray.slice(rightCounter));
}

let test = [3,1,2,4,5];

mergeSort(test);
console.log(mergeSort(test));