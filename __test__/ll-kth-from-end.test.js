'use strict';

const LinkedList = require ('../ll-insertions');
// const Nd = require('../nd')

describe('Linked Lists Insertion tests', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  // test('#append', () => {
  //   const testList = new LinkedList();
  //   testList.append(4);
  //   expect(testlist.head.value).toEqual(4);
  // });
