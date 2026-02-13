/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let arr = [];
  function inorder(node) {
    if (node === null) return;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};
// @lc code=end
