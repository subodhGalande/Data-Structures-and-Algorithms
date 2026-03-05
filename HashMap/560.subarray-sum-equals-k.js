/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // optimizes with hashmap and prefixSum
  let map = new Map();
  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (let num of nums) {
    prefixSum += nums;

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
  //brute force

  //   if (nums.length === 0) {
  //     return 0;
  //   }

  //   let count = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = 0;
  //     for (let j = i; j < nums.length; j++) {
  //       sum += nums[j];
  //       if (sum === k) {
  //         count++;
  //       }
  //     }
  //   }
};

// @lc code=end
