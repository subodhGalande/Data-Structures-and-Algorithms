/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let l = 0;
  let map = new Map();
  let best = 0;

  for (let r = 0; r < fruits.length; r++) {
    map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);

    while (map.size > 2) {
      const left = fruits[l];
      map.set(left, map.get(left) - 1);
      if (map.get(left) === 0) {
        map.delete(left);
      }
      l++;
    }
    best = Math.max(best, r - l + 1);
  }
  return best;
};
// @lc code=end
