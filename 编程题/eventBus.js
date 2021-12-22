class Events {
  constructor() {
    this.events = new Map();
  }

  // 挂载回调
  on(key, fn, ...args) {
    if (!fn) {
      console.error(`没有传入回调函数`);
      return;
    }
    this.addEvents(key, fn, false, ...args);
  }
  // 挂载只执行一次的回调
  once(key, fn, ...args) {
    if (!fn) {
      console.error(`没有传入回调函数`);
      return;
    }
    this.addEvents(key, fn, true, ...args);
  }
  addEvents(key, fn, isOnce, ...initArgs) {
    // 判断是否已经有这个key的事件map对象，每一个key都可以保存多个回调
    // 有的话就返回这个map对象
    // 没有的话就新建一个map对象并返回该map
    const value = this.events.has(key)
      ? this.events.get(key)
      : this.events.set(key, new Map()).get(key);
    // 在这个map对象上挂载回调
    value.set(fn, (...laterArgs) => {
      // 合并两次调用时参数
      fn(...initArgs, ...laterArgs);
      // 判断是否只执行一次，只执行一次则将回调卸载
      isOnce && this.off(key, fn);
    });
  }
  // 卸载回调
  off(key, fn) {
    if (this.events.has(key)) {
      this.events.get(key).delete(fn);
    }
  }
  // 触发该key上挂载的所有回调
  fire(key, ...args) {
    if (!this.events.has(key)) {
      console.warn(`没有 ${key} 事件`);
      return;
    }
    for (const [, cb] of this.events.get(key).entries()) {
      cb(...args);
    }
  }
}

const fn1 = (...args) => console.log("I want sleep1", ...args);
const fn2 = (...args) => console.log("I want sleep2", ...args);

const events = new Events();
events.on("sleep", fn1, 1, 2, 3);
events.on("sleep", fn2, 1, 2, 3);
events.fire("sleep", 4, 5, 6);
// I want sleep1 1 2 3 4 5 6
// I want sleep2 1 2 3 4 5 6
events.off("sleep", fn1);
events.once("sleep", () => console.log("I want sleep"));
events.fire("sleep");
// I want sleep2 1 2 3
// I want sleep
events.fire("sleep");
// I want sleep2 1 2 3
