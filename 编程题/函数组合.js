// 实现一个函数组合：
// const composed = compose(f1,f2,f3, ...)
// composed('zzzz')  =>  f1(f2(f3('zzzz)))
// 思路：reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

function compose(...fns) {
  return function (params) {
    return fns.reduceRight(function (arg, fn) {
      console.log(arg, fn); // arg就是每次执行时的参数，第一次就是初始化时的参数
      return fn(arg);
    }, params);
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
const flatten_unique_sort = compose(sort, unique, flattenDeep);
// 测试
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

console.log(flatten_unique_sort(arr));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
