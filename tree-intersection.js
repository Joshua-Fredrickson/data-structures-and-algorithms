'use strict';

let solution = '';

export default function treeIntersection(treeOne, treeTwo) {
  let myMap = Map;
  let a = inOrderTraversal(treeOne);

  myMap.set(a);
  let b = inOrderTraversal(treeTwo);

  if(b === myMap.search(b)) {
    return solution + b;
  }

}