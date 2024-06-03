//selection sort

selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    console.log(i, lowest);

    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  console.log(arr);
  return arr;
};

selectionSort([1, 23, 45, 234, 234, 25, 212]);
