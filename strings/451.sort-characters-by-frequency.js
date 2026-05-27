/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

  let res = "";
  for (let [key, val] of sorted) {
    res += key.repeat(val);
  }

  return res;
};
// @lc code=end
