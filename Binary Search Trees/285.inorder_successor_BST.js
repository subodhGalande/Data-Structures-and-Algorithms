/***********************
 * TreeNode Definition
 ***********************/
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/***********************
 * BST Insert Helper
 ***********************/
function insertIntoBST(root, val) {
  if (root === null) return new TreeNode(val);

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}

/***********************
 * Find Node Helper (for p)
 ***********************/
function findNode(root, val) {
  if (root === null) return null;
  if (root.val === val) return root;

  if (val < root.val) return findNode(root.left, val);
  return findNode(root.right, val);
}

/************************************************
 * ✍️ WRITE YOUR SOLUTION HERE (IMPORTANT)
 ************************************************/
function inorderSuccessor(root, p) {
  // 👉 WRITE YOUR LOGIC ONLY INSIDE THIS FUNCTION
  // do NOT modify anything else

  let res = [];
  let output = 0;

  function inorder(node) {
    if (node === null) return null;

    inorder(node.left);
    res.push(node);
    inorder(node.right);
  }

  inorder(root);

  for (let i = 0; i < res.length; i++) {
    if (res[i] === p) {
      return res[i + 1] || null;
    }
  }

  return null;
}

/***********************
 * TESTING / INVOCATION
 ***********************/

// Build BST: [5,3,6,2,4,null,null,1]
let root = null;
[5, 3, 6, 2, 4, 1].forEach((val) => {
  root = insertIntoBST(root, val);
});

// Test Case 1
let p = findNode(root, 3);
let result = inorderSuccessor(root, p);
console.log("Successor of 3:", result ? result.val : null); // expected: 4

// Test Case 2
p = findNode(root, 6);
result = inorderSuccessor(root, p);
console.log("Successor of 6:", result ? result.val : null); // expected: null

// Test Case 3
p = findNode(root, 1);
result = inorderSuccessor(root, p);
console.log("Successor of 1:", result ? result.val : null); // expected: 2
