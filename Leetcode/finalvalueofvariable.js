finalValueAfterOperations = (operations) => {
  let x = 0;

  for (let i = 0; i < operations.length; i++) {
    operations[i] == "--X" || operations[i] == "X--" ? (x -= 1) : (x += 1);
  }
  console.log(x);
  return x;
};

finalValueAfterOperations(["--X", "X++", "X++"]);
