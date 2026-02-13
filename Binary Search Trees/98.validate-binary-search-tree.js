/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * LeetCode 98: Validate Binary Search Tree
 *
 * CORE TRAP: You cannot just check if a node's left child is smaller and right child is larger.
 * ALL nodes in the left subtree must be smaller than the ancestor, and vice versa.
 *
 * Strategy: Recursive Range Validation
 * Time Complexity: O(n) - we visit every node exactly once.
 * Space Complexity: O(h) - for the recursion stack.
 */
var isValidBST = function (root) {
  /**
   * Helper function to track the allowed range [min, max] for the current node.
   * @param {TreeNode} node - Current node being checked
   * @param {number} low - The strict lower bound for this node's value
   * @param {number} high - The strict upper bound for this node's value
   */
  function validate(node, low, high) {
    // 1. Base Case: An empty tree or reaching a leaf is technically a valid BST
    if (node === null) return true;

    // 2. The Current Node check:
    // It MUST be strictly greater than 'low' AND strictly less than 'high'
    // it is checking if the node val is less than or equal to low OR(if false) is the node val greater than equal to high
    if (node.val <= low || node.val >= high) {
      return false;
    }

    /**
     * 3. Recursive Step:
     * - When going LEFT: The new 'high' becomes the current node's value.
     * - When going RIGHT: The new 'low' becomes the current node's value.
     * Both subtrees MUST be valid for the whole tree to be a BST.
     */
    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  }

  // Start with the root and a range of negative to positive Infinity
  return validate(root, -Infinity, Infinity);
};
// @lc code=end
