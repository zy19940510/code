// leetcode70题
// 思路1：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 爬上 n-1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
// 爬上 n-2 阶楼梯的方法数量，因为再爬2阶就能到第n阶
//  dp[n] = dp[n-1] + dp[n-2]
// 思路2：使用斐波那契数列公式计算
var climbStairs = function (n) {
  const dp = [];
  dp[0] = 1; // 0层有1种方法
  dp[1] = 1; // 1层有1中方法
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(climbStairs(4));