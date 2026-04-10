/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const freq = new Array(26).fill(0);
  const a = "A".charCodeAt(0);
  let l = 0,
    best = 0,
    maxFreq = 0;

  for (let r = 0; r < s.length; r++) {
    freq[s.charCodeAt(r) - a]++;
    maxFreq = Math.max(maxFreq, freq[s.charCodeAt(r) - a]);

    if (r - l + 1 - maxFreq > k) {
      freq[s.charCodeAt(l) - a]--;
      l++;
    }

    best = Math.max(best, r - l + 1);
  }
  return best;
};
// @lc code=end
