//  You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.
//  The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.
//  Return the permutation difference between s and t.
//  Example 1:
//  Input: s = "abc", t = "bac"
//  Output: 2
//  Explanation:
//  For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:
//  The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
//  The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
//  The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
//  That is, the permutation difference between s and t is equal to |0 - 1| + |2 - 2| + |1 - 0| = 2.

findPermutationDifference = (s, t) => {
  let freqCounter1 = {};
  let freqCounter2 = {};
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    freqCounter1[s[i]] = (freqCounter1[i] || 0) + i;
  }

  for (let j = 0; j < t.length; j++) {
    freqCounter2[t[j]] = (freqCounter2[j] || 0) + j;
  }

  for (let val in freqCounter1) {
    if (val in freqCounter2) {
      result += Math.abs(freqCounter1[val] - freqCounter2[val]);
    }
  }
  return result;
};

findPermutationDifference("abcde", "edbac");
