/**
 *
 * @param {*} poolLimit 限制并发的数量
 * @param {*} array 任务数组
 * @returns
 */
function asyncPool(poolLimit, array) {
  let i = 0;
  const ret = []; // 用来存储所有的Promise任务
  const pendingArr = []; // 用来存储所有正在执行的Promise任务

  const enqueue = function () {
    // 遍历完成
    if (i === array.length) {
      return Promise.resolve();
    }
    const task = array[i++]; // 获取第i个任务
    const p = task(); // 执行任务，会返回promise
    ret.push(p); // 将promise放入ret数组
    // promise执行完毕，从pendingArr数组中删除
    const e = p.then(() => pendingArr.splice(pendingArr.indexOf(e), 1));
    // 插入pendingArr数组，表示正在执行的promise
    // 用这个数组的长度来判断有没有超过并发限制
    // 每一个被push进去的任务，在执行完毕后，会将自己删除
    pendingArr.push(e);
    // 判断正在执行的任务数量有没有超过限制
    // 如果超过了就用race干掉一个，然后继续递归
    // 如果没超过，就直接继续递归
    let r =
    pendingArr.length >= poolLimit
        ? Promise.race(pendingArr)
        : Promise.resolve();
    // 递归，直到遍历完array
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret)); // 最后呢，用Promise.all 等待全部任务完成，返回Promise的结果输出
}

const result = [];
for (let index = 0; index < 10; index++) {
  result.push(function () {
    return new Promise((resolve, reject) => {
      console.log("开始" + index, new Date().toLocaleString());
      setTimeout(() => {
        resolve(index);
        console.log("结束" + index, new Date().toLocaleString());
      }, parseInt(Math.random() * 8000));
    });
  });
}

asyncPool(2,result).then((res) => {
  console.log(res);
});
