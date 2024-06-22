function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swap(arr, swapIdx, i);
      swapIdx++;
    }
  }

  swap(arr, start, swapIdx);
  console.log(swapIdx);
}

pivot([1, 2, 45, 32, 56, 7]);
