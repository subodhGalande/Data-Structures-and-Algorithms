/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  const tMap = new Map();
  for (const c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1);
  }

  const windowMap = new Map();
  const need = tMap.size; // unique chars needed
  let have = 0;

  let l = 0;
  let best = "";

  for (let r = 0; r < s.length; r++) {
    // EXPAND
    const rc = s[r];
    windowMap.set(rc, (windowMap.get(rc) || 0) + 1);

    // did this char just become fully satisfied?
    if (tMap.has(rc) && windowMap.get(rc) === tMap.get(rc)) {
      have++;
    }

    // SHRINK while valid — record inside
    while (have === need) {
      // record if smaller than current best
      if (best === "" || r - l + 1 < best.length) {
        best = s.slice(l, r + 1);
      }

      // remove left char
      const lc = s[l];
      windowMap.set(lc, windowMap.get(lc) - 1);

      // did removing it break satisfaction?
      if (tMap.has(lc) && windowMap.get(lc) < tMap.get(lc)) {
        have--;
      }

      l++;
    }
  }

  return best;
};
// @lc code=end
