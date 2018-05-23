'use strict';

const findMaximumValue = (tree) => {
  if (!tree.root) {
    return undefined;
  }

  let highestCurrentValue = 0;
  const preOrderTraversal = (rootNode) => {
    if (!rootNode) {
      return null;
    }

    if (rootNode.value > highestCurrentValue) {
      highestCurrentValue = rootNode.value;
    }
    preOrderTraversal(rootNode.left);
    preOrderTraversal(rootNode.right);

    return null;
    };
  preOrderTraversal(tree.root);
  return highestCurrentValue;
};

export default findMaximumValue;
