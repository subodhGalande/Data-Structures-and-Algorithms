/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();

  for (let val of nums) {
    map.set(val, (map.get(val) || 0) + 1);
  }

  for (let [key, val] of map) {
    if (val > nums.length / 2) {
      return key;
    }
  }
};
// @lc code=end
