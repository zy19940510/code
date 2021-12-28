/**
 * 力扣121题
 * 思路
 * 第i天不持有 由 第i-1天不持有然后不操作 和 第i-1天持有然后卖出 两种情况的最大值转移过来
 * dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 * 第i天持有 由 第i-1天持有然后不操作 和 第i-1天不持有然后买入 两种情况的最大值转移过来
 * dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
 */

//时间复杂度O(n) 空间复杂度O(n)，dp数组第二维是常数
const maxProfit = function (prices) {
  let n = prices.length;
  let dp = Array.from(Array(n), () => Array(2));
  dp[0][0] = 0; //第0天不持有
  dp[0][1] = -prices[0]; //第0天持有
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]); // 注意：只允许交易一次，因此手上的现金数就是当天的股价的相反数
  }
  return dp[n - 1][0];
};
// 状态压缩，可以把dp[i]去掉，变为一维，让空间复杂度降为O(1)
// 时间复杂度O(n) 空间复杂度O(1)
const maxProfit = function (prices) {
  let n = prices.length;
  let dp = Array.from(Array(n), () => Array(2));
  dp[0] = 0;
  dp[1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i]);
    dp[1] = Math.max(dp[1], -prices[i]);
  }
  return dp[0];
};

// 语意化
const maxProfit = function (prices) {
  let n = prices.length;
  let sell = 0;
  let buy = -prices[0];
  for (let i = 1; i < n; i++) {
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, -prices[i]);
  }
  return sell;
};
