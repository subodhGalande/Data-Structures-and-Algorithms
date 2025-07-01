//powersolution

// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   return base * power(base, exponent - 1);
// }

// power(5, 2);

//product of solution

// function productofArray(arr) {
//   if (arr.length === 0) return 1;

//   return arr[0] * productofArray(arr.slice(1));
// }

// productofArray([1, 2, 3, 4, 5]);

//fibonacci sequence

// function fibonacci(n) {
//   if (n <= 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// fibonacci(5);

// string reversal

// function reversal(str) {
//   if (str.length <= 1) return str;

//   return reversal(str.slice(1)) + str[0];
// }

// reversal("hello");

//isPalindrome

// function palindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) {
//     return palindrome(str.slice(1, -1));
//   }
// }

// palindrome("racecar");

//array flatten

function flatten(oldArr) {
  var newArr = [];

  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

flatten([1, [1, 2], 3, [4, 5]]);
