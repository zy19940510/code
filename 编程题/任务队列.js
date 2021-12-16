/**
 * 实现一个arrange函数，可以进行时间和工作调度
 */
//  [  >  …  ]  表示调用函数后的打印内容

//  arrange('William');
//  >  William  is  notified

//  arrange('William').wait(5).do('commit');
//  >  William  is  notified
//  等待  5  秒
//  >  Start  to  commit

//  arrange('William').waitFirst(5).do('push');
//  等待  5  秒
//  >  Start  to  push
//  >  William  is  notified

class Arrange {
  index = 0;
  promises = [];
  constructor(info) {
    this.promises = [`${info} is notified`];
    this.index++;
  }
  // 出现 `waitFirst` 从前面载入
  waitFirst = (s) => {
    this.promises.unshift(
      new Promise((resolve) => setTimeout(resolve, s * 1000))
    );
    this.index = 1;
    return this;
  };
  // 出现 `wait` 消除 `waitFirst` 效果
  wait = (s) => {
    this.promises.push(new Promise((resolve) => setTimeout(resolve, s * 1000)))
    this.index = this.promises.length;
    return this;
  };
  do = (task) => {
    switch (task) {
      case "commit":
        this.promises.splice(this.index, 0, `Start  to  commit`);
        break;
      case "push":
        this.promises.splice(this.index, 0, "Start  to  push");
        break;
      default:
        break;
    }
    this.index++;
    return this;
  };
  run = async (log) => {
    for (let i = 0; i < this.promises.length; i++) {
      const info = await Promise.resolve(this.promises[i]);
      log && info && log(info);
    }
    return this;
  };
}

const arrange = (s = "") => {
  const a = new Arrange(s);
  setTimeout(() => {
    a.run(function (info) {
      console.log(info);
    });
  }, 0);
  return a;
};

// arrange('William');
// arrange('William').wait(5).do('commit');
arrange("William").waitFirst(5).do("push");
