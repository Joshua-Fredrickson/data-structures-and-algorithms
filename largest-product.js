'use strict';


const largestProduct = module.exports = {};

let arrayZ = [[1,2,3], [2,3,1] [3,1,2]];


function largestProduct (arrayZ) {
  let highestProduct = 0;
  const outerLen = arrayZ.length;
  // const innerLen = arrayZ[0].length;

  for (let j = 0; j < outerLen; j++){
    if(j - 1 >= 0) {
      console.log('j', j);
      for (let k = 0; k < arrayZ[j].length; k++) {
        if (k - 1 >= 0) {
          console.log('k', k);
          let y = arrayZ[j][k] * arrayZ[j][k + 1];
          if (y > highestProduct) {
            highestProduct = y;
            console.log('y', y);
          }
          ;
          let x = arrayZ[j][k] * arrayZ[j][k - 1];
          if (x > highestProduct) {
            highestProduct = x;
            console.log('x', x);
          }
        }
      }
    }
  }
}

