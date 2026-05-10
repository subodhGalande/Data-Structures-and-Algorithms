/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    if (s[r] !== s[l]) {
      return isPal(s, l + 1, r) || isPal(s, l, r - 1);
    }
    l++;
    r--;
  }
  return true;
};

const isPal = (str, l, r) => {
  while (l < r) {
    if (str[r] !== str[l]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
// @lc code=end
