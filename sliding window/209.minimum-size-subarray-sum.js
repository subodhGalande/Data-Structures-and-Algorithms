/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = 0;
  let sum = 0;
  let length = Infinity;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    while (sum >= target) {
      length = Math.min(length, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }
  return length === Infinity ? 0 : length;
};
// @lc code=end
