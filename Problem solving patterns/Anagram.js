//code to check if a given string is anagram

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    console.log("length is not same");
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      console.log("matching letters not present in given string");
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      console.log(" letters frequency does not match in given string");
      return false;
    }
  }
  console.log("is anagram");
  return true;
}

checkAnagram("anagram", "mraaana");
