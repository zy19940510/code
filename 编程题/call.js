Function.prototype.myCall = function (context) {
  // 不传第一个参数，默认是window
  let context = context || window
  // 改变this指向，让新的对象可以执行该函数
  // 思路可以变成给新的对象添加一个函数，执行后删除
  // getValue.call(a, 'zy', '27') => a.fn = getValue
  context.fn = this
  // 将context后面的参数取出来
  let args = [...arguments].slice(1)
  // getValue.call(a, 'zy', '27') => a.fn('zy', '27')
  let result = context.fn(...args)
  // 删除fn
  delete context.fn
  return result
};
