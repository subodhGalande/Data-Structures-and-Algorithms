var isPalindrome = function (s) {
  if (s.length === 0) {
    return true;
  }

  let alphaNumericRegex = /[a-zA-Z0-9]/;
  let string = s
    .split("")
    .filter((str) => alphaNumericRegex.test(str))
    .join("")
    .toLowerCase();

  let left = 0;
  let right = string.length - 1;

  for (let i = 0; i < string.length; i++) {
    if (string[left] === string[right]) {
      left++;
      right--;
    } else if (string[left] !== string[right]) {
      return false;
    }
  }
  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
