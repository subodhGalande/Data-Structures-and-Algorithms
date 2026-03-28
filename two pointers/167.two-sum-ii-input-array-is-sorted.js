/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  let res = [];

  while (l < r) {
    let sum = numbers[l] + numbers[r];

    if (sum < target) {
      l++;
    } else if (sum > target) {
      r--;
    } else {
      return [l + 1, r + 1];
    }
  }
};
// @lc code=end
