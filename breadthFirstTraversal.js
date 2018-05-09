'use strict'

import Queue from 'queue-fifo';
import BinaryTree from './lib/binary-tree';
import Node from './lib/node';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

const tree = new BinaryTree(one);
one.left = two;
one.right = three;
two.left = four;
three.left = five;

function breadthFirstTraversal(tree) {
  let queue = new Queue();
  queue.isEmpty();
  queue.enQueue(tree.root);
  let solution = ' ';

  while(!queue.isEmpty()) {
    const currentNode = queue.deQueue();
    solution + `${currentNode}`;
    queue.enQueue(currentNode.right);
    queue.enQueue(currentNode.left);
  }
}