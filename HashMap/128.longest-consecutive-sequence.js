/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let set = new Set(nums);
  let maxLen = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let curr = num;
      let length = 1;

      while (set.has(curr + 1)) {
        curr++;
        length++;
      }
      maxLen = Math.max(maxLen, length);
    }
  }

  return maxLen;
};
// @lc code=end
