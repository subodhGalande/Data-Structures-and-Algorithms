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
 * LeetCode 530: Minimum Absolute Difference in BST
 *
 * CORE TRICK: An "In-Order Traversal" of a BST visits nodes in SORTED order.
 * The minimum difference must exist between two adjacent values in the sorted list.
 *
 * Strategy: In-order Traversal (L -> Root -> R)
 * Time Complexity: O(n) - we visit every node once.
 * Space Complexity: O(h) for the recursion stack, where h is tree height.
 */
var getMinimumDifference = function (root) {
  let minDiff = Infinity;
  let prevValue = null;

  function inOrder(node) {
    if (node === null) return;

    // 1. Traverse left (smaller values)
    inOrder(node.left);

    // 2. Process Current Node
    // If we have a previous value, compare it with the current one
    if (prevValue !== null) {
      // In-order ensures node.val is ALWAYS >= prevValue, so result is positive
      minDiff = Math.min(node.val - prevValue, minDiff);
    }
    // Update prevValue for the next node in the sorted sequence
    prevValue = node.val;

    // 3. Traverse right (larger values)
    inOrder(node.right);
  }

  inOrder(root);

  return minDiff;
};
// @lc code=end

/**
 * --- ALTERNATIVE ARRAY METHOD (Easier to visualize) ---
 *
 * 1. Perform In-order traversal and push all values into an array.
 *    Result: [1, 2, 3, 5, 7] (A sorted array!)
 * 2. Loop through the array once and compare adjacent elements.
 *
 * Pros: Much easier to understand.
 * Cons: Uses O(n) extra space for the array.
 */
/*
const arr = [];
function inOrder(node) {
  if (node === null) return;
  inOrder(node.left);
  arr.push(node.val);
  inOrder(node.right);
}

inOrder(root);

let minDiff = Infinity;
for (let i = 1; i < arr.length; i++) {
  minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
}
return minDiff;
*/
