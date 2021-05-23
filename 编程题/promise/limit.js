/**
 *
 * @param {*} poolLimit 限制并发的数量
 * @param {*} array 任务数组
 * @returns
 */
function asyncPool(poolLimit, array) {
  let i = 0;
  const ret = []; // 用来存储所有的Promise任务
  const pendingArr = []; // 正在执行的Promise对象

  const enqueue = function () {
    // 边界处理，array为空数组或者遍历完成
    if (i === array.length) {
      return Promise.resolve();
    }
    const item = array[i++]; // 获取参数
    const p = item(); // 初始化一个promise
    ret.push(p); // 放入promises数组
    // promise执行完毕，从pendingArr数组中删除
    const e = p.then(() => pendingArr.splice(pendingArr.indexOf(e), 1));
    // 插入pendingArr数组，表示正在执行的promise
    pendingArr.push(e);
    // 使用Promise.race，每当pendingArr数组中promise数量低于poolLimit，就实例化新的promise并执行
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
