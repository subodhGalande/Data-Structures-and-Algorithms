/*
 * @lc app=leetcode id=1456 lang=javascript
 *
 * [1456] Maximum Number of Vowels in a Substring of Given Length
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let max = 0;
  let window = 0;
  let set = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) {
      window += 1;
    }
  }

  max = window;

  for (let r = k; r < s.length; r++) {
    if (set.has(s[r])) {
      window += 1;
    }

    if (set.has(s[r - k])) {
      window -= 1;
    }

    max = Math.max(window, max);
  }

  return max;
};
// @lc code=end
