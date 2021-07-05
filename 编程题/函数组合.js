// 实现一个函数组合：
// const composed = compose(f1,f2,f3, ...)
// composed('zzzz')  =>  f3(f2(f1('zzzz)))

function compose(...fns) {
  return function (x) {
    return fns.reduceRight(function (arg, fn) {
      return fn(arg);
    }, x);
  };
}
