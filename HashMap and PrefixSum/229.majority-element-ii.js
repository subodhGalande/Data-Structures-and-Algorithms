/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let res = [];

  for (let val of nums) {
    map.set(val, (map.get(val) || 0) + 1);
  }

  for (let [key, val] of map) {
    if (val > nums.length / 3) {
      res.push(key);
    }
  }
  return res;
};
// @lc code=end
