var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
};

// searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 2);
// searchInsert("1,3,5,6", 8);
