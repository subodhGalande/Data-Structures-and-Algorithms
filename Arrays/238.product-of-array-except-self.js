/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let res = new Array(n);

  res[0] = 1;

  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return res;
};
// @lc code=end
