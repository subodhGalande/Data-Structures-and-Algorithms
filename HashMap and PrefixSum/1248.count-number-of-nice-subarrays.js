/*
 * @lc app=leetcode id=1248 lang=javascript
 *
 * [1248] Count Number of Nice Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let map = new Map([[0, 1]]);

  let count = 0;
  let sum = 0;

  for (n of nums) {
    if (n % 2 !== 0) sum++;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};
// @lc code=end
