async function async1() {
  console.log("async1 start");
  await async2(); // 这条语句执行会同步执行async2，所以会打印async2
  // 但是这条语句会被加入到微任务队列里
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");
// 加入到宏任务队列
setTimeout(() => {
  console.log("setTimeout");
}, 0);

async1();

new Promise((resolve) => {
  // 同步执行
  console.log("promise1");
  resolve(); // 立刻将then回调加入到微任务队列
}).then(() => {
  console.log("promise2");
});
console.log("script end");
