//create a countdown using recursion

function countdown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }

  console.log(num);
  num--;
  countdown(num);
}

countdown(3);
