class Events {
  constructor() {
    this.events = new Map();
  }

  addEvents(key, fn, isOnce, ...args) {
    const value = this.events.get(key)
      ? this.events.get(key)
      : this.events.set(key, new Map()).get(key);
    value.set(fn, (...args1) => {
      fn(...args, ...args1);
      isOnce && this.off(key, fn);
    });
  }

  on(key, fn, ...args) {
    if (!fn) {
      console.error(`没有传入回调函数`);
      return;
    }
    this.addEvents(key, fn, false, ...args);
  }

  off(key, fn) {
    if (this.events.get(key)) {
      this.events.get(key).delete(fn);
    }
  }

  fire(key, ...args) {
    if (!this.events.get(key)) {
      console.warn(`没有 ${key} 事件`);
      return;
    }
    for (const [, cb] of this.events.get(key).entries()) {
      cb(...args);
    }
  }

  once(key, fn, ...args) {
    if (!fn) {
      console.error(`没有传入回调函数`);
      return;
    }
    this.addEvents(key, fn, true, ...args);
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
events.once('sleep', () => console.log('I want sleep'));
events.fire('sleep');
// I want sleep2 1 2 3
// I want sleep
events.fire('sleep');
// I want sleep2 1 2 3