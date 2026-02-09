/*
 * @lc app=leetcode id=1382 lang=javascript
 *
 * [1382] Balance a Binary Search Tree
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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  let arr = [];

  function inorder(node) {
    if (node === null) return null;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  function build(left, right) {
    if (left > right) {
      return null;
    }

    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(arr[mid]);

    node.left = build(left, mid - 1);
    node.right = build(mid + 1, right);

    return node;
  }

  return build(0, arr.length - 1);
};
// @lc code=end
