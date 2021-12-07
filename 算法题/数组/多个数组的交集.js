/**
 * 多个数组的交集
 * every方法表示数组里面的每个元素是否都能通过指定函数的测试
 * 这里是想测试后面的数组中是否都包含第一个数组里的元素
 */
function intersection2(list, ...args) {
  return list.filter((item) => args.every((arg) => arg.includes(item)));
}

console.log(intersection2([1, 2], [2, 3]));
