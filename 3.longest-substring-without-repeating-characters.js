/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let length = 0;

  let window = new Set();

  for (let r = 0; r < s.length; r++) {
    while (window.has(s[r])) {
      window.delete(s[l]);
      l++;
    }
    window.add(s[r]);

    length = Math.max(length, r - l + 1);
  }
  return length;
};
// @lc code=end
