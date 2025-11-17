var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let n of nums) {
    if (n <= first) first = n;
    else if (n <= second) second = n;
    else return true;
  }
  return false;
};

increasingTriplet([2, 1, 5, 0, 4, 6]);
