/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let str = s.split("");

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (vowels.has(str[l]) && vowels.has(str[r])) {
      [str[l], str[r]] = [str[r], str[l]];
      l++;
      r--;
    } else if (!vowels.has(str[l])) {
      l++;
    } else if (!vowels.has(str[r])) {
      r--;
    }
  }
  return str.join("");
};
// @lc code=end
