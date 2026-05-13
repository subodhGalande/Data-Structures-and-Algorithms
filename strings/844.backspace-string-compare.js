/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let strS = checkStr(s);
  let strT = checkStr(t);

  return strS === strT;
};

const checkStr = (str) => {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "#") {
      res.push(str[i]);
    } else {
      res.pop();
    }
  }

  return res.join("");
};
// @lc code=end
