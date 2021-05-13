/** generator 自动执行函数 */
function co(fn) {
  return new Promise((resolve) => {
    const gen = fn(); // 获得Generator对象
    next();

    function onFulled(value) {
      // console.log(value); // 这里可以拿到yield的结果，表示当前任务已执行完成
      // 接着执行下一个next任务，并将上一个任务的结果返回
      next(value);
    }

    function next(val) {
      // 解构出done、value
      const { done, value } = gen.next(val); // 开始启动第一个yield
      console.log(value); // value是一个promise
      // 如果已结束，则resolve返回
      if (done) {
        resolve(value);
      } else {
        // 未结束则拿到上一个结果, 可以在promise.then回调中拿到
        value.then(onFulled);
      }
    }
  });
}

// 测试 //
function sleep(time) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(time), time)
  );
}

co(function* () {
  console.log("start");
  const b = yield sleep(1000);
  console.log(b);
  // const a = yield sleep(2000);
  // console.log(a);
  return "end";
}).then((res) => console.log('co-res',res));
