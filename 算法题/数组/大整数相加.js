let a = "426709752318";
let b = "95481253129";
// 两个大数相加
// 模拟竖式运算过程
function bigNumberSum(a, b) {
  // 取两个数字最大长度，再加1，是为了进位预留的
  let maxLength = Math.max(a.length, b.length) + 1;
  // 用0补齐长度，让两个数字长度相等，然后转换成数组，然后反转数组，使个位在数组前面，这样更符合从左到右访问数组的习惯
  a = a.padStart(maxLength, 0).split("").reverse(); // ['8', '1', '3', '2','5', '7', '9', '0','7', '6', '2', '4','0']
  b = b.padStart(maxLength, 0).split("").reverse(); // ['9', '2', '1', '3','5', '2', '1', '8','4', '5', '9', '0','0']
  // 创建结果数组，长度同样是maxLength，预留进位
  let retArr = new Array(maxLength);
  // 开始计算，遍历两个数组，从左到右照对应下标把元素两两相加，模拟竖式运算
  // 在本示例中，最先相加的是数组 A 的第 1 个元素 8 和数组 B 的第 1 个元素 9，结果是 7，进位 1。把 7 填充到 result 数组的对应下标位置，进位的 1 填充到下一个位置
  for (let i = 0; i < retArr.length; i++) {
    let temp = ~~retArr[i];
    // 加上两个数字当前位
    temp = temp + ~~a[i] + ~~b[i];
    // 判断是否需要进位
    if (temp >= 10) {
      temp -= 10;
      // 将下一位进1
      retArr[i + 1] = 1;
    }
    retArr[i] = temp;
  }
  // 运算好后将数组再次反转过来，然后去掉前面的0，恢复成正常数字
  retArr = Number(retArr.reverse().join(""));
  return retArr;
}

console.log(bigNumberSum(a, b));

// 优化：将大数字进行分组，每一组9位数字
