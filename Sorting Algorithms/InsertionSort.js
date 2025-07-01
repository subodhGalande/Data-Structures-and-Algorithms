//insertion sort

insertionSort = (arr) => {
  let currentVal;
  let j;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    console.log(currentVal);
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    console.log(j + 1);
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  console.log(arr);
  return arr;
};

insertionSort([2, 1, 9, 76, 4]);
