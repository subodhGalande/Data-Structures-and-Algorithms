/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let first = null;
  let second = null;
  let prev = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    if (prev !== null && prev.val > node.val) {
      if (!first) {
        first = prev;
        second = node;
      } else {
        second = node;
      }
    }

    prev = node;
    inorder(node.right);
  }

  inorder(root);

  const temp = first.val;
  first.val = second.val;
  second.val = temp;
};
// @lc code=end
