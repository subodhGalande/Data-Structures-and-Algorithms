/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = new Map();
  map.set(0, -1);

  let maxLen = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;

    if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return maxLen;
};
// @lc code=end
