// factorial with iterative method

// function factorial(num) {
//   let total = 1;

//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   console.log(total);
// }

// factorial(5);

//factiorial recursive

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(5);
