/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var maxProfit = function (prices) {
    if (prices.length < 2) return 0;

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
      // Sell today
      let profit = prices[i] - minPrice;

      maxProfit = Math.max(maxProfit, profit);

      // Update minimum price
      minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
  };
};
// @lc code=end
