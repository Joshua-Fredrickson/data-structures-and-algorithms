'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = node;
    return this;
  }

  removeAtHead() {
    let removedNode = this.head;
    this.head = this.next;
    return removedNode;
  }
}


const findMatches = (kTree, value) => {
  let list1 = new LinkedList();

  let currentNode = tree.root;

  list1.insertAtHead(currentNode);
  
}