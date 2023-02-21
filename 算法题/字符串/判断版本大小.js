// 判断版本大小函数
function compareVersion(v1, v2) {
  // 请在这里实现
  const v1Arr = v1.split(".");
  const v2Arr = v2.split(".");
  const len = Math.max(v1Arr.length, v2Arr.length);
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1Arr[i] || 0, 10);
    const num2 = parseInt(v2Arr[i] || 0, 10);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}
