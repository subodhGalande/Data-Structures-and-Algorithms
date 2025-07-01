// canPlaceFlowers = (flowerbed, n) => {
//   let count = 0;
//   if (n == 0) return true;
//   if (flowerbed.length == 0) {
//     return false;
//   }
//   if (flowerbed[0] == flowerbed[1]) {
//     count++;
//   }
//   if (flowerbed[flowerbed.length - 1] == flowerbed[flowerbed.length - 2]) {
//     count++;
//   }
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] !== flowerbed[i + 1]) continue;
//     else {
//       if (flowerbed[i + 1] == flowerbed[i + 2]) {
//         count++;
//         i++;
//       } else {
//         continue;
//       }
//     }
//   }
//   if (count >= n) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// };

canPlaceFlowers = (flowerbed, n) => {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let prev = flowerbed[i - 1] || 0;
    let current = flowerbed[i];
    let next = flowerbed[i + 1] || 0;

    if (prev === 0 && current !== 1 && next === 0) {
      count++;
      flowerbed[i] = 1;
    }
  }
  console.log(count >= n);
  return count >= n;
};

canPlaceFlowers([1, 0, 0, 0, 0, 1], 2);
