/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
 * 设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */
function maxProfit(prices) {
  let min = prices[0]
  let max = 0

  for (const price of prices) {
    min = Math.min(min, price)
    max = Math.max(max, price- min) // 反复执行，找到最大利润
  }

  return max
}
