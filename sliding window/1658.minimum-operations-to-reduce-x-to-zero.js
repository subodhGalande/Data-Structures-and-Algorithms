/*
 * @lc app=leetcode id=1658 lang=javascript
 *
 * [1658] Minimum Operations to Reduce X to Zero
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let l = 0;
  let sum = 0;
  let best = -1;

  let total = nums.reduce((a, b) => a + b, 0);
  let target = total - x;

  if (target < 0) return -1;
  if (target === 0) return nums.length;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    while (sum > target) {
      sum -= nums[l];
      l++;
    }

    if (sum === target) {
      best = Math.max(best, r - l + 1);
    }
  }

  return best === -1 ? -1 : nums.length - best;
};
// @lc code=end
