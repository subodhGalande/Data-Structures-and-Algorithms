var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (len1, len2) => {
    while (len2 !== 0) {
      [len1, len2] = [len2, len1 % len2];
    }
    return len1;
  };

  return str1.slice(0, gcd(str1.length, str2.length));
};
