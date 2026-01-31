/**
 * LeetCode 938: Range Sum of BST
 * Calculate the sum of all node values that are within the range [low, high].
 *
 * Strategy: Depth-First Search (DFS) with Pruning
 * Time Complexity: O(n) in worst case, but better on average due to pruning.
 * Space Complexity: O(h) for the recursion stack.
 */
function rangeSumOfBST(root, low, high) {
  // Base Case: empty node contributes 0 to the sum
  if (!root) {
    return 0;
  }

  let sum = 0;

  // 1. If current node's value is within range, add it to our total
  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }

  /**
   * 2. Pruning (Efficiency):
   * If root.val is greater than 'low', there MIGHT still be values
   * in the LEFT subtree that are within range.
   */
  if (root.val > low) {
    sum += rangeSumOfBST(root.left, low, high);
  }

  /**
   * 3. Pruning (Efficiency):
   * If root.val is less than 'high', there MIGHT still be values
   * in the RIGHT subtree that are within range.
   */
  if (root.val < high) {
    sum += rangeSumOfBST(root.right, low, high);
  }

  return sum;
}
