'use strict';

const LinkedList = require ('../ll-insertions');
// const Nd = require('../nd')

describe('Linked Lists Insertion tests', () => {
   test('#constructor', () => {
     const testList = new LinkedList();
     expect(testList.head).toBeNull();
   });
   test('#append', () => {
     const testList = new LinkedList();
     testList.append(4);
     expect(testlist.value).toEqual(4);
   });
  test('#insertBefore', () => {
    const testList = new LinkedList();
    testList.insertBefore(4,10);
    expect(testlist.end).toEqual(4);
  });
  test('#insertAfter', () => {
    const testList = new LinkedList();
    testList.insertAfter(5,9);
    expect(testlist.end).toEqual(9);
  });
});
