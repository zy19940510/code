// 实现一个能控制promise并发数的函数
class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.count = 0;
    this.limit = limit;
  }

  add(promiseCreator) {
    let _resolve;
    // 1先创建临时函数
    const tempFunc = () => {
      this.count++;
      // 开始执行任务
      promiseCreator().then(() => {
        // 异步任务执行完毕时，触发resolve，使add能在then里拿到结果
        _resolve();
        // 减少任务数
        this.count--;
        // 前面两个执行完了，则将队列里对头的任务推出并执行
        if (this.queue.length) {
          this.queue.shift()();
        }
      });
    };
    // 2判断正在执行的函数个数，小于limit则执行，否则推入执行队列
    if (this.count < this.limit) {
      tempFunc();
    } else {
      this.queue.push(tempFunc);
    }

    // add函数执行后返回promise，在then里面拿到执行结果
    // 将resolve保存
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}

// 任务包裹器
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};
addTask(1000, "a");
addTask(1000, "b");
addTask(1000, "c");
addTask(1000, "d");
addTask(1000, "e");
addTask(1000, "f");
// output: a、b、c、d、e、f
// 一开始，a、b两个任务直接执行，c、d、e、f进入队列
// 1000ms 时，a、b完成，输出a、b，开始执行c、d
// 2000ms 时，c、d完成，输出c、d，开始执行e、f
// 3000ms 时，e、f完成，输出e、f
