//helper method - collect odd values

// function collectOdds(arr) {
//   let result = [];

//   function helper(helperInputs) {
//     if (helperInputs.length == 0) return;

//     if (helperInputs[0] % 2 !== 0) {
//       result.push(helperInputs[0]);
//     }

//     helper(helperInputs.slice(1));
//   }

//   helper(arr);

//   console.log(result);
//   return result;
// }

// pure recursion collect odd values.

function collectOdds(arr) {
  let newArr = [];

  if (arr.length == 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}

collectOdds([1, 2, 3, 4, 56, 6, 7, 8]);
