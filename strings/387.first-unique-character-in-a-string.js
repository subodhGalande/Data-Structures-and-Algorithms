/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map();

  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (let [key, val] of map) {
    if (val === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
// @lc code=end
