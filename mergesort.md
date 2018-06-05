#find matches

## Challenge
Write a function that takes a k-ary tree with non-unique values and a target value.
Return a collection of all the nodes from within the tree that match the provided value.

## Solution
![mergeSort image](./assets/mergeSort.jpg)


 - [x] Take a picture of Whiteboard
 - [x] make the README.md
 - [x] make the .js file
 - [x] make the test file
 - [x] Test Code
 ![mergeSort test results image](./assets/mergeSort-test.jpeg)
 - [x] Solution Code
```$xslt
const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }

  const middleValue = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleValue);
  const right = arr.slice(middleValue);

  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
```