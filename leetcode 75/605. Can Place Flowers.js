var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;

  while (i < flowerbed.length && n !== 0) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i++;
    }
    i++;
  }
  return n === 0;
};

canPlaceFlowers([1, 0, 0, 0, 1], 1);
canPlaceFlowers([1, 0, 0, 0, 1], 2);
