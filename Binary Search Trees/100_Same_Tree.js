/**
 * LeetCode 100: Same Tree
 * Determines if two binary trees are structurally identical and have the same node values.
 *
 * Strategy: Divide and Conquer (Recursive)
 * Time Complexity: O(min(N, M)) where N and M are the number of nodes in p and q.
 * Space Complexity: O(min(H1, H2)) for the recursion stack, where H is the height.
 */
var isSameTree = function (p, q) {
  // Case 1: Both nodes are null (reached the end of a branch simultaneously)
  if (!p && !q) return true;

  // Case 2: One node is null but the other isn't, OR their values don't match
  // We check existence first to avoid errors when accessing .val
  if (!p || !q || p.val !== q.val) return false;

  /**
   * Case 3: Values match! Now recursively check:
   * 1. If the left subtrees are identical
   * 2. If the right subtrees are identical
   * Both MUST be true.
   */
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

isSameTree([1, 2, 3], [1, 2, 3]);
