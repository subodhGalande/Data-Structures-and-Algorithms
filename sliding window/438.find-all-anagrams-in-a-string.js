/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let freqP = {};
  let freqW = {};
  let result = [];

  for (let i = 0; i < p.length; i++) {
    freqP[p[i]] = (freqP[p[i]] || 0) + 1;
    freqW[s[i]] = (freqW[s[i]] || 0) + 1;
  }

  if (isEqual(freqP, freqW)) result.push(0);

  for (let r = p.length; r < s.length; r++) {
    freqW[s[r]] = (freqW[s[r]] || 0) + 1;
    const leftChar = s[r - p.length];
    freqW[leftChar]--;

    if (freqW[leftChar] === 0) {
      delete freqW[leftChar];
    }

    if (isEqual(freqP, freqW)) result.push(r - p.length + 1);
  }

  return result;
};

const isEqual = (a, b) => {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (let key in a) {
    if (a[key] !== b[key]) return false;
  }
  return true;
};
// @lc code=end
