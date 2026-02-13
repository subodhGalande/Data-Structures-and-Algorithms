/**
 * LeetCode 144: Binary Tree Preorder Traversal
 * Preorder visits nodes in the order: Root -> Left -> Right
 *
 * This implementation uses an iterative approach with a Stack.
 * Time Complexity: O(n) where n is the number of nodes.
 * Space Complexity: O(h) where h is the height of the tree (for the stack).
 */
const preOrderTraversal = (root) => {
  // Base case: if the tree is empty, return an empty array
  if (!root) return [];

  // Use a stack to mimic the recursion calls (LIFO - Last In First Out)
  const stack = [root];
  const res = [];

  while (stack.length > 0) {
    // 1. Pop the current node from the stack (Root)
    const node = stack.pop();

    // 2. Add the node's value to our result list
    res.push(node.val);

    /**
     * Stack is LIFO (Last In, First Out).
     * To process 'Left' before 'Right', we must push 'Right' first,
     * so that 'Left' stays on top of the stack and gets popped next.
     */
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
};

preOrderTraversal([1, null, 2, 3]);
