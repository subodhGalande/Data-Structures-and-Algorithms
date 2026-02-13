var sortedArrayToBST = function (nums) {
  function buildBST(left, right) {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);

    node.left = buildBST(left, mid - 1);
    node.right = buildBST(mid + 1, right);

    return node;
  }

  return buildBST(0, nums.length - 1);
};
