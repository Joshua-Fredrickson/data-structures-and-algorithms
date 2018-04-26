'use strict';

let linkedList = require('ll-insertions');
//create my linkedList1 & 2


let counter1 = 0;
let counter2 = 0;
let curNode1 = linkedList1;
let curNode2 = linkedList2;

while(curNode1.next !== null) {
  counter1 = counter1++;
  curNode1 = curNode1.next;
}

while(curNode2.next !== null) {
  counter2 = counter2++;
  curNode2 = curNode2.next;
}

if(counter1 > counter2) {
  for(i = 0; i < counter1; i++){
    curNode1.insertAfter(curNode2);
  }

  for(i = 0; i < counter2; i++){
    curNode2.insertAfter(curNode1);
  }
}