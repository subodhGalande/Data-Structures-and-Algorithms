/*
 * @lc app=leetcode id=974 lang=javascript
 *
 * [974] Subarray Sums Divisible by K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (n of nums) {
    sum += n;

    let rem = sum % k;
    if (rem < 0) rem += k;

    if (map.has(rem)) {
      count += map.get(rem);
    }

    map.set(rem, (map.get(rem) || 0) + 1);
  }

  return count;
};
// @lc code=end
