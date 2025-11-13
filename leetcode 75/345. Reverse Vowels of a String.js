var reverseVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let l = 0;
  let r = s.length - 1;
  let arr = s.split("");

  while (l < r) {
    while (l < r && !vowels.has(arr[l])) left++;
    while (l < r && !vowels.has(arr[r])) r--;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  return arr.join("");
};

reverseVowels("IceCreAm");
