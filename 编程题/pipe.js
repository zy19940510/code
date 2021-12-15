// 实现管道函数
// const composed = compose(f1,f2,f3, ...)
// composed('zzzz')  =>  f3(f2(f1('zzzz)))
// 思路：reduce() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从左到右）将其减少为单个值。
function pipe(...fns) {
  return function (x) {
    return fns.reduce(function (arg, fn) {
      console.log(arg, fn); // arg就是每次执行时的参数，第一次就是初始化时的参数
      return fn(arg);
    }, x);
  };
}

// 进阶：利用函数组合，对多维数组进行扁平化、去重、排序

// 扁平化
const flattenDeep = (array) => array.flat(Infinity);

// 去重
const unique = (array) => Array.from(new Set(array));

// 排序
const sort = (array) => array.sort((a, b) => a - b);

// 组合后函数
const flatten_unique_sort = pipe(flattenDeep, sort, unique);
// 测试
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

console.log(flatten_unique_sort(arr));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
