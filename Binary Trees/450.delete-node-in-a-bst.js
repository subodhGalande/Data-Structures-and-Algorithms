/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) {
    return null;
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    //edge case 1: if node is a leaf node
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    //edge case 3: if above condition fails now we have two child values, we will now get the inorder successor from the tree

    let successor = getMin(root.right);
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
};

function getMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}
// @lc code=end
