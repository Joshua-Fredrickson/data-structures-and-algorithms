'use strict';


const largestProduct = module.exports = {};

let arrayS = [[1,2,3], [2,3,1], [3,1,2]];


function largestProduct (arrayS) {
  let highestProduct = 0;
  const outerLen = arrayS.length;
  // const innerLen = arrayS[0].length;
  for (let j = 0; j < outerLen; j++){
    if(j - 1 >= 0) {
      console.log('j', j);
      for (let k = 0; k < arrayS[j].length; k++) {
        if (k - 1 >= 0) {
          console.log('k', k);
          let y = arrayS[j][k] * arrayS[j][k + 1];
          if (y > highestProduct) {
            highestProduct = y;
            console.log('y', y);
          }
          ;
          let x = arrayS[j][k] * arrayS[j][k - 1];
          if (x > highestProduct) {
            highestProduct = x;
            console.log('x', x);
          }
        }
      }
    }
  }
  return highestProduct;
}

