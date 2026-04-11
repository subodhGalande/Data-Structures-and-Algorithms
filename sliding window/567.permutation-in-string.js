/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const map1 = new Map();
  const map2 = new Map();
  const k = s1.length;

  // build both maps for first window
  for (let i = 0; i < k; i++) {
    map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
    map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
  }

  const isMatch = () => {
    for (let [key, val] of map1) {
      if (map2.get(key) !== val) return false; // .get() returns undefined if missing → fails correctly
    }
    return true;
  };

  if (isMatch()) return true;

  for (let r = k; r < s2.length; r++) {
    // add right
    map2.set(s2[r], (map2.get(s2[r]) || 0) + 1);

    // remove left
    const left = s2[r - k];
    map2.set(left, map2.get(left) - 1);
    if (map2.get(left) === 0) map2.delete(left); // Map uses .delete() not delete keyword

    if (isMatch()) return true;
  }

  return false;
};

// @lc code=end
