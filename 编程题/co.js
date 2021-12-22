/** generator 自动执行函数 */
function co(fn) {
  return new Promise((resolve) => {
    const gen = fn(); // 获得Generator对象
    next();

    function next(val) {
      // 解构出done、value
      const { done, value } = gen.next(val); // 触发yield
      // 如果已结束，则resolve返回
      if (done) {
        resolve(value);
      } else {
        // 未结束就在sleep任务结束后继续调用下一个next
        value.then((val) => {
          console.log("val", val, Date.now()); // 第一次等1秒打印1000，第二次等2秒打印2000
          next(val);
        });
      }
    }
  });
}

// 测试 //
function sleep(time) {
  return new Promise((resolve) => setTimeout(() => resolve(time), time));
}

co(function* () {
  console.log("start");
  const b = yield sleep(1000);
  console.log("yield over", b, Date.now());
  const a = yield sleep(2000);
  console.log("yield over", a, Date.now());
  return "end";
}).then((res) => console.log("co-res", res));
