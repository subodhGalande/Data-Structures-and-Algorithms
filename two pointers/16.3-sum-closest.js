/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let closest = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      // update closest if better
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return sum; // exact match found
      }
    }
  }

  return closest;
};
// @lc code=end
