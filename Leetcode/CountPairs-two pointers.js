var countPairs = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  let count = 0;

  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum < target) {
      console.log(target, sum);
    } else {
      return 1;
    }
  }
  console.log(count);
  return count;
};

countPairs([-1, 1, 2, 3, 1], 2);
