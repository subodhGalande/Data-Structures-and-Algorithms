/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let l = 0,
    best = 0,
    product = 1;

  for (let r = 0; r < nums.length; r++) {
    product *= nums[r];

    while (product >= k) {
      product /= nums[l];
      l++;
    }

    best += r - l + 1;
  }

  return best;
};
// @lc code=end
