// leetcode70题
// 思路1：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// n阶台阶可以拆解成两个
// 1：先爬1阶，那问题就是剩下n - 1阶怎么爬
// 2：先爬2阶，那问题就是剩下n - 2阶怎么爬
// 归纳得出：dp[n] = dp[n-1] + dp[n-2]
// 思路2：使用斐波那契数列公式计算
// 时间复杂度O(n)
var climbStairs = function (n) {
  const dp = [0,1,2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(climbStairs(4));

// 斐波那契数列函数，并列出每一个数
function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}
console.log(fib(10));