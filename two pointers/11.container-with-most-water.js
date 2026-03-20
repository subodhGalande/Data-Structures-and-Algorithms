/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;

  while (l < r) {
    let containerHeight = Math.min(height[l], height[r]);
    let width = r - l;
    maxWater = Math.max(containerHeight * width, maxWater);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxWater;
};
// @lc code=end
