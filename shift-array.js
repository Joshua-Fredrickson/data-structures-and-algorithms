'use strict';

const shiftArray = module.exports = {};

shiftArray.shifting = (inputArray, inputValue) => {
  const newArray = [];
  const targetIndexValue = Math.ceil(inputArray.length / 2);

  for (let i = 0; i < targetIndexValue; i++) {
    newArray.push(i);
  };

  newArray.push(inputValue);

  for (let j = (targetIndexValue + 1); j < inputArray.length; j++) {
    newArray.push(j)
  };

  return newArray;
}
