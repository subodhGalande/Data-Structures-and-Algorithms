/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function lowerBound(target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  let leftIndex = lowerBound(target);

  // target not found
  if (leftIndex === nums.length || nums[leftIndex] !== target) {
    return [-1, -1];
  }

  let rightIndex = lowerBound(target + 1) - 1;

  return [leftIndex, rightIndex];
};
// @lc code=end
