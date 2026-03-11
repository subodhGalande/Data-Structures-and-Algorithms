/*
 * @lc app=leetcode id=930 lang=javascript
 *
 * [930] Binary Subarrays With Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  //prefix sum + hashing
  let map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (n of nums) {
    sum += n;

    if (map.has(sum - goal)) {
      count += map.get(sum - goal);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};
// @lc code=end
