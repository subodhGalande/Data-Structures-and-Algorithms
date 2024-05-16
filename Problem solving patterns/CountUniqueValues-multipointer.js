//with frequency counter

function countUniqueValues(arr) {
  let frequencyCounter = {};

  for (let val of arr) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }

  console.log(Object.keys(frequencyCounter).length);
}

countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 6, 6]);
