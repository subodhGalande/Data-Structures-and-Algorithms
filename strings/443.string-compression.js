/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let write = 0; //write pointer
  let i = 0; //read pointer

  while (i < chars.length) {
    let char = chars[i];
    let count = 0;

    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    chars[write] = char;
    write++;

    if (count > 1) {
      for (let digit of String(count)) {
        chars[write] = digit;
        write++;
      }
    }
  }
  return write;
};
// @lc code=end
