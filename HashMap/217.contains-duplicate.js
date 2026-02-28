/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      return true;
    }
    map.set(num, true);
  }

  return false;
};
// @lc code=end
