//count unique values using multipointer method

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
  return i + 1;
}

countUniqueValues([
  1, 1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 0, 0, 78, 56, 678, 678678, 67,
]);
