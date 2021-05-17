// 同时处理多个promise，所有都完成后才返回

function promiseAll(promises) {
  // 返回一个promise
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    var countNum = 0; // 保存一个count，用来标记当前有多少任务已经执行完了
    var promiseNum = promises.length; // 总任务数
    var resolvedvalue = new Array(promiseNum); // 把每一个任务返回值保存起来
    // 遍历数组，执行每一个任务
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(
        function (value) {
          // 当前任务执行完毕之后，使count增加
          countNum++;
          // 把每一个任务返回值保存起来
          resolvedvalue[i] = value;
          // 如果执行完的任务数量等于传入的个数，就说明所有的任务都执行完了
          if (countNum === promiseNum) {
            // 把之前保存起来的返回值返回出去
            return resolve(resolvedvalue);
          }
        },
        function (reason) {
          // 如果其中一个炸了，就直接reject返回
          return reject(reason);
        }
      );
    }
  });
}
var p1 = Promise.resolve(1),
  p2 = Promise.resolve(2),
  p3 = Promise.resolve(3);
promiseAll([p1, p2, p3]).then(function (value) {
  console.log(value);
});
