/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 * 思路
 * 1、第一行、第一列都只有一条路径dp[i][0] = 1、dp[0][j] = 1
 * 2、这是个杨辉三角形，每个位置的路径 = 该位置左边的路径 + 该位置上边的路径
 * 3、dp[i][j] = dp[i-1][j] + dp[i][j-1]
 */

var uniquePaths = function (m, n) {
  let dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));
  // console.log(dp);
  for(let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for(let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (var i = 1; i < m; i++)
    for (var j = 1; j < n; j++) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
