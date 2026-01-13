const preOrderTraversal = (root) => {
  if (!root) return [];

  const stack = [root];
  const res = [];

  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
};

preOrderTraversal([1, null, 2, 3]);
