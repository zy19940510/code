// 给你一个32位有符号整数x，返回反转后的结果
function reverse(x) {
  let str = x.toString() // 数字转字符串
  let arr = str.split('') // 字符串转数组
  if(arr[0] !== '-') {
    let num = Number(arr.reverse().join('')) // 使'1000' 变为 '0001'的时候去掉前面的0
    if(num >= Math.pow(2, 32) - 1 && num <= -Math.pow(2, 32)) {
      // 溢出
      return 0
    }
    return num
  } else {
    arr.shift() // 去掉前面的-
    let num = Number(arr.reverse().join(''))
    if(num >= Math.pow(2, 32) - 1 && num <= -Math.pow(2, 32)) {
      return 0
    }
    return -num
  }
}

/**
 * 思考：
 * 其实也可以用数学的方式去解决
 * 拿到末尾数字就可以了，比如12345，先拿到5、然后是4、然后3、2、1
 * 可以将数字 12345 % 10，就能拿到最后一个5，再 12345 / 10 反复拿到4、3、2、1
 * 0*10 + temp，就是最后的数字
 * 然后处理边界情况
 */