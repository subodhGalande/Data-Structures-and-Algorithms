//sliding window

var strStr = function (haystack, needle) {
  const n = haystack.length,
    m = needle.length;

  if (m === 0) return 0;
  if (m > n) return -1;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) j++;
    if (j === m) return i;
  }

  return -1;
};

strStr("sadbutsad", "sad");
