function rangeSumOfBST(root, low, high) {
  if (!root) {
    return 0;
  }

  let sum = 0;

  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }
  if (root.val > low) {
    sum += rangeSumOfBST(root.left, low, high);
  }
  if (root.val < high) {
    sum += rangeSumOfBST(root.right, low, high);
  }

  return sum;
}
