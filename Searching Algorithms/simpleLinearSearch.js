//simple linear search

linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      console.log(i);
      return i;
    }
  }
  console.log("value not found");
  return -1;
};

linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 99], 23);
