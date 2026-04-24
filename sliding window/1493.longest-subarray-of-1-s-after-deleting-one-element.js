/*
 * @lc app=leetcode id=1493 lang=javascript
 *
 * [1493] Longest Subarray of 1's After Deleting One Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let l = 0,
    best = 0,
    zeroes = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      zeroes++;
    }

    while (zeroes > 1) {
      if (nums[l] === 0) zeroes--;
      l++;
    }

    best = Math.max(best, r - l + 1);
  }

  return best - 1;
};
// @lc code=end
