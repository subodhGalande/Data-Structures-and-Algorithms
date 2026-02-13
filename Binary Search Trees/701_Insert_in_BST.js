/**
 * LeetCode 701: Insert into a Binary Search Tree
 * To insert, we search for the value until we hit a null (leaf position).
 *
 * Strategy: BST Property (Left < Root < Right)
 * Time Complexity: O(h) where h is the tree height.
 * Space Complexity: O(h) for recursive stack, O(1) for iterative.
 */

// --- ITERATIVE APPROACH ---
/**
 * var insertIntoBST = function (root, val) {
 *   const node = new TreeNode(val);
 *
 *   // If tree is empty, the new node becomes the root
 *   if (root === null) return node;
 *
 *   let curr = root;
 *   while (true) {
 *     if (val < curr.val) {
 *       // Go left: if we hit a dead end, that's our spot!
 *       if (curr.left === null) {
 *         curr.left = node;
 *         break;
 *       }
 *       curr = curr.left;
 *     } else {
 *       // Go right: if we hit a dead end, that's our spot!
 *       if (curr.right === null) {
 *         curr.right = node;
 *         break;
 *       }
 *       curr = curr.right;
 *     }
 *   }
 *   return root;
 * };
 */

// --- RECURSIVE APPROACH ---
function insertIntoBST(root, val) {
  // 1. Base Case: We've found the empty spot where the node belongs
  if (root === null) {
    return new TreeNode(val);
  }

  // 2. Recursive Step: Decide whether to go Left or Right based on value
  if (val < root.val) {
    // Re-assign the left child to be the result of the insertion
    root.left = insertIntoBST(root.left, val);
  } else {
    // Re-assign the right child to be the result of the insertion
    root.right = insertIntoBST(root.right, val);
  }

  // 3. Return the (now modified) root
  return root;
}

insertIntoBST([4, 2, 7, 1, 3], 5);
