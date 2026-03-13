/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let map = new Map();

  map.set(0, -1);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let rem = sum % k;

    if (map.has(rem) && i - map.get(rem) > 1) {
      return true;
    }

    if (!map.has(rem)) {
      map.set(rem, i);
    }
  }
  return false;
};
// @lc code=end
