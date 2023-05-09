/**
 * 力扣121题
 * 思路
 * 第i天不持有 由 第i-1天不持有然后不操作 和 第i-1天持有然后卖出 两种情况的最大值转移过来
 * dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 * 第i天持有 由 第i-1天持有然后不操作 和 第i-1天不持有然后买入 两种情况的最大值转移过来
 * dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
 */
// 1、动态规划
//时间复杂度O(n) 空间复杂度O(n)
var maxProfit = function (prices) {
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

// 状态压缩，因为dp[i]只和dp[i-1]有关，所以可以压缩空间复杂度到O(1)
// 时间复杂度O(n) 空间复杂度O(1)
var maxProfit = function (prices) {
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

// 2、贪心算法，空间复杂度O(1) 时间复杂度O(n)
var maxProfit = function (prices) {
    if (prices.length < 2) return 0;
    let min = prices[0]; // 最小买入
    let max = 0; // 最大卖出
    for(let p of prices) {
        min = Math.min(min, p);
        max = Math.max(max, p - min);
    }
    return max;
}