function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]; // Overwrite the next unique element
      k++;
    }
  }

  return k;
}

removeDuplicates([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 6, 6]);
