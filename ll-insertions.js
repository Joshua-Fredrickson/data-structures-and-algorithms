'use strict';

const Nd = require('./nd');

module.exports = class LinkedList {
  constructor(name) {
    this.head = null;
  }

  append(newValue) {
    let nodeContent = this.head;
    while(nodeContent.next !== null) {
      nodeContent = nodeContent.next;
    }
  }

  insertBefore(value, newValue) {
    let nodeContent = this.head;
    while(nodeContent !== null) {
      if(nodeContent.next === value) {
        let x = nodeContent.next;
        nodeContent.next = new Nd(newValue);
        nodeContent.next.next = x;
        return this;
      }
      nodeContent = nodeContent.next;
    }
  }

  insertAfter(value, newValue) {
    let nodeContent = this.head;
    while(nodeContent !== null) {
      if (nodeContent === value) {
        let y = nodeContent.next;
        nodeContent.next = new Nd(newValue);
        nodeContent.next.next = y;
        return this;
      }
      nodeContent = nodeContent.next;
    }
  }
}

