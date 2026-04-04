/*
 * @lc app=leetcode id=1343 lang=javascript
 *
 * [1343] Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  if (sum / k >= threshold) {
    count++;
  }

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    if (sum / k >= threshold) {
      count++;
    }
  }

  return count;
};
// @lc code=end
