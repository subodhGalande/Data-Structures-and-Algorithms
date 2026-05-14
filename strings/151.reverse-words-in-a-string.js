/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s
    .trim()
    .split(" ")
    .filter((word) => word !== "");

  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    [str[l], str[r]] = [str[r], str[l]];

    l++;
    r--;
  }

  return str.join(" ");
};
// @lc code=end
