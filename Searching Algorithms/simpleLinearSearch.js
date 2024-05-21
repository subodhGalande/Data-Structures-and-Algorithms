//simple linear search

linearSearch = (arr, val) => {
  for (let i of arr) {
    if (arr[i] === val) {
      console.log(i);
      return i;
    }
  }
  return -1;
};

linearSearch([1, 2, 3, 4, 5, 6], 6);
