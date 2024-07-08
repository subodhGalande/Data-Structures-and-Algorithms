// gcdOfStrings = (str1, str2) => {
//   if (str2.length > str1.length) return gcdOfStrings(str2, str1);
//   if (!str1.includes(str2)) return "";

//   for (let i = str1.length; i < 1; i--) {
//     console.log(str1);
//     if (str1.startsWith(str2)) {
//       var sub = str1.substr(str2.length);
//       str1 = sub;
//       console.log(str1);
//     }
//     console.log(str1);
//   }

//   console.log(str1);
//   return sub;
// };

gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";
  else if (str1 == str2) return str1;
  else if (str1.length > str2.length)
    return gcdOfStrings(str1.substring(str2.length), str2);
  else return gcdOfStrings(str2.substring(str1.length), str1);
};

gcdOfStrings("abcabc", "abc");
