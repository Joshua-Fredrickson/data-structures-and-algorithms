'use strict';

class Queue {
  constructor () {
    this.pushS = new Stack();
    this.popS = new Stack();
  }

    function enQueue(value) {
    stackA = [];
    stackB = [];
    stackA.push(value);
    stackB.push(stackB.pop);
  }

  function deQueue(value) {
    stackA = [];
    stackB = [];
    stackB.pop(value);
    stackA.pop(stackB.push);
  }
};
