Function.prototype.myApply = function (context) {
  let context = context || window;
  context.fn = this;
  let result;
  // 需要判断是否存在第二个参数
  if (arguments[1]) {
    // 如果有，就将第二个参数展开
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
