var reverseWords = function (s) {
  let optimized = s
    .trim()
    .split(" ")
    .reverse()
    .filter((word) => word.length > 0)
    .join(" ");
  return optimized;
};

reverseWords("the sky is blue");
reverseWords("  hello world  ");
reverseWords("a good   example");
