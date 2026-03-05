/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

// @lc code=end
