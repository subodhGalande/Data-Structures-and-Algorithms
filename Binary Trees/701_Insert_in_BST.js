var insertIntoBST = function (root, val) {
  const node = new TreeNode(val);

  if (root === null) return node;

  let curr = root;

  while (true) {
    if (val < curr.val) {
      if (curr.left === null) {
        curr.left = node;
        break;
      }
      curr = curr.left;
    } else {
      if (curr.right === null) {
        curr.right = node;
        break;
      }
      curr = curr.right;
    }
  }

  return root;
};

insertIntoBST([4, 2, 7, 1, 3], 5);
