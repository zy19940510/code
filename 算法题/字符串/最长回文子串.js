// leetcode5题
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 中心扩散法
function longestPalindrome(s) {
  if (s.length < 2) return s;
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    // 奇数 aba, 从b开始向两边扩散
    helper(i, i);
    // 偶数 abba， 从bb开始向两边扩散
    helper(i, i + 1);
  }
  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--;
      n++;
    }
    if (n - m - 1 > ret.length) {
      ret = s.slice(m + 1, n);
    }
  }
  return ret;
}
