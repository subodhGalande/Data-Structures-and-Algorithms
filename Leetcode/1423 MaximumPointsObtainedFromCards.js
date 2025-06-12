/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
function maxScore(cardPoints, k) {
  let lsum = 0;

  let rsum = 0;
  let maxsum = 0;

  if (cardPoints.length === k) {
    return cardPoints.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  for (i = k - 1; i >= 0; i--) {
    lsum += cardPoints[i];
  }

  maxsum = lsum;

  let rindex = cardPoints.length - 1;
  for (i = k - 1; i >= 0; i--) {
    lsum = lsum - cardPoints[i];
    rsum = rsum + cardPoints[rindex];
    rindex--;
    maxsum = Math.max(maxsum, lsum + rsum);
  }

  console.log("🚀 ~ maxScore ~ rsum:", rsum);
  console.log("🚀 ~ maxScore ~ lsum:", lsum);
  console.log("🚀 ~ maxScore ~ maxsum:", maxsum);
}

maxScore([1, 2, 3, 4, 5, 6, 1], 3);
