function largestElement(nums) {
  let stack = [];
  stack.push(nums[0]);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > stack[stack.length - 1]) {
      stack[stack.length - 1] = nums[i];
    }
  }

  return stack[0];
}

largestElement([1, 2, 3, 5, 7]);
