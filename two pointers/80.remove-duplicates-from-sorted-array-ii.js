/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 2;

  for (let right = 2; right < nums.length; right++) {
    if (nums[right] !== nums[left - 2]) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
};
// @lc code=end
