// function called sumzero which accepts sorted array and find the first pair of elements which returns 0 on adding them.

function sumzero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      console.log([arr[left], arr[right]]);
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      left--;
    } else {
      right++;
    }
  }
}

sumzero([-3, -2, -1, 0, 1, 2, 3]);
