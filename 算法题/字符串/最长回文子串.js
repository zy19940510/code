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
  function helper(l, r) {
    // 双指针l、r，相同并且没有超过边界，则继续往两边扩散
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
    }
    // 截取字符串
    const maxLen = r - l + 1;
    if (maxLen > ret.length) {
      ret = s.substring(l, l + maxLen);
    }
  }
  return ret;
}

console.log(longestPalindrome("abba"));
