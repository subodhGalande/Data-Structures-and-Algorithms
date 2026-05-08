/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    if (sMap.has(c1) && sMap.get(c1) !== c2) {
      return false;
    }

    if (tMap.has(c2) && tMap.get(c2) !== c1) {
      return false;
    }

    sMap.set(c1, c2);
    tMap.set(c2, c1);
  }
  return true;
};
// @lc code=end
