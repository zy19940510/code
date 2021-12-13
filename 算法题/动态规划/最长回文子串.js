// 动态规划法
/**
 * 状态dp[i][j]: 以下标i开头j结尾的字串是否是回文串（boolean）
 * 时间复杂度O(n^2)
 * 空间复杂度O(n^2)
 * @param {*} s 字符串
 */
const longestPalindrome = (s) => {
  let res = "";
  let n = s.length;
  // 初始化n x n方阵
  let dp = Array.from(Array(n), () => Array(n).fill(false));
  // 行
  for (let i = n - 1; i >= 0; i--) {
    // 列
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

console.log(longestPalindromeDP("abba"));
