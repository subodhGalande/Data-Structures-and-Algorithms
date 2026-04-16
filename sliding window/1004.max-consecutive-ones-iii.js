/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let l = 0;
  let best = 0;
  let zeroes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes++;
    }

    while (zeroes > k) {
      if (nums[l] === 0) {
        zeroes--;
      }
      l++;
    }

    best = Math.max(best, i - l + 1);
  }
  return best;
};
// @lc code=end
