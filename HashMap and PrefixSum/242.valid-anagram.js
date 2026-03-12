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
  //optimized approach
  if (s.length !== t.length) {
    return false;
  }

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }

  for (let val of map.values()) {
    if (val !== 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end

//unoptimized approach

// if (s.length !== t.length) {
//   return false;
// }

// let strS = new Map();
// let strT = new Map();

// for (let val of s) {
//   strS.set(val, (strS.get(val) || 0) + 1);
// }
// for (let val of t) {
//   strT.set(val, (strT.get(val) || 0) + 1);
// }

// for (let val of t) {
//   if (strS.get(val) !== strT.get(val)) {
//     return false;
//   }
// }

// return true;
