//anagram checker with subtracting letter frequency

function Anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let val of first) {
    lookup[val] = (lookup[val] || 0) + 1;
  }
  console.log(lookup);

  for (let val of second) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  console.log("is anagram");
  return true;
}

Anagram("anas", "asan");
