/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];

  let result = [];

  function dfs(node, currentSum, path) {
    if (!node) return;

    currentSum += node.val;
    path.push(node.val);

    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...path]);
    }

    dfs(node.left, currentSum, path);
    dfs(node.right, currentSum, path);

    path.pop();
  }

  dfs(root, 0, []);

  return result;
};
// @lc code=end
