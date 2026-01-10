function secondLargestStack(nums) {
  if (nums.length < 2) return -1;

  let stack = [];

  for (let num of nums) {
    if (stack.length > 0 && stack[stack.length - 1] === num) {
      continue;
    }

    while (stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop();
    }

    stack.push(num);
  }

  return stack.length >= 2 ? stack[1] : -1;
}

secondLargestStack([7, 7, 2, 2, 10, 10, 10]);
