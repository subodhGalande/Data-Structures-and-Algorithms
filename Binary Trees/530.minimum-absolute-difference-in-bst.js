/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Infinity;
  let prev = null;

  function inOrder(node) {
    if (node === null) return;

    inOrder(node.left);

    if (prev !== null) {
      min = Math.min(node.val - prev, min);
    }
    prev = node.val;
    inOrder(node.right);
  }

  inOrder(root);

  return min;
};
// @lc code=end

// ARRAY METHOD
// const arr = [];

// function inOrder(node) {
//   if (node === null) return;

//   inOrder(node.left);
//   arr.push(node.val);
//   inOrder(node.right);
// }

// inOrder(root);

// let min = Infinity;

// for (let i = 1; i < arr.length; i++) {
//   min = Math.min(arr[i] - arr[i - 1], min);
// }

// return min;
