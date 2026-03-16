/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }

  let set = new Set(nums2);

  let result = new Set();

  for (let n of nums1) {
    if (set.has(n)) {
      result.add(n);
    }
  }

  return [...result];
};
// @lc code=end
