// leetcode20题
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
var isValid = function (s) {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (s[i] !== map[stack.pop()]) return false;
    }
  }
  return stack.length == 0;
};
