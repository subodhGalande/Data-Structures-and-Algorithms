/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (t.length < s.length || s.length < t.length) return false;

  let sMap = new Map();

  for (let char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (sMap.has(char)) {
      sMap.set(char, sMap.get(char) - 1);
    }
  }

  for (let val of sMap.values()) {
    if (val > 0) return false;
  }

  return true;
};
// @lc code=end

// two hashmaps approach

// if (t.length < s.length || s.length < t.length) return false;

// let sMap = new Map();
// let tMap = new Map();

// for (let char of s) {
//   sMap.set(char, (sMap.get(char) || 0) + 1);
// }

// for (let char of t) {
//   tMap.set(char, (tMap.get(char) || 0) + 1);
// }

// for (let [key, val] of sMap) {
//   if (!tMap.has(key) || tMap.get(key) < val) {
//     return false;
//   }
// }

// return true;
