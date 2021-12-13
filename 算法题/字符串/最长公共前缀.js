/**
 * 力扣14
 * 思路：拿第一个进行逐一比较
 * 每次遍历后将第一个进行裁剪成公共部分
 */
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  let prev = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < prev.length && j < strs[i].length; j++) {
      if (prev.charAt(j) !== strs[i].charAt(j)) break; // 一个一个比较，如果不相同就裁剪
    }
    prev = prev.substring(0, j);
  }
  return prev;
};
