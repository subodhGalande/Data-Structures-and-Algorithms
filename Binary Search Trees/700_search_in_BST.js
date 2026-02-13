/**
 * LeetCode 700: Search in a Binary Search Tree
 * Exploits the BST property: Left < Root < Right
 *
 * Strategy: Recursion (Binary Search Principle)
 * Time Complexity: O(h) where h is the tree height. O(log n) for balanced trees.
 * Space Complexity: O(h) for the recursion stack.
 */
const searchBST = (root, val) => {
  // Base Case 1: Value not found or tree is empty
  if (root === null) return null;

  // Base Case 2: Found the node!
  if (root.val === val) return root;

  /**
   * Recursive Step:
   * If target 'val' is smaller than current node, it MUST be in the left subtree.
   * If target 'val' is larger, it MUST be in the right subtree.
   * This effectively eliminates half the search space at each step.
   */
  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

searchBST([4, 2, 7, 1, 3], 2);
