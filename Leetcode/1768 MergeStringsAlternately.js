mergeAlternately = (word1, word2) => {
  let result = "";
  let longestString;
  let shortestString;
  if (word1.length === 0 || word2.length === 0) return;

  if (word1.length > word2.length) {
    longestString = word1;
    shortestString = word2;
  } else {
    longestString = word2;
    shortestString = word1;
  }

  for (var i = 0; i < shortestString.length; i++) {
    let ptr1 = word1[i];
    let ptr2 = word2[i];
    result = result.concat(ptr1.concat(ptr2));
  }
  for (var j = i; i < longestString.length; i++) {
    result = result.concat(longestString[i]);
  }
  console.log(result);
  return result;
};

MergeStringsAlternately("abcde", "pqrst");
