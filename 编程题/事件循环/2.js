console.log("start");
setTimeout(() => {
  console.log("children2");
  Promise.resolve().then(() => {
    console.log("children3");
  });
}, 0);
new Promise((resolve, reject) => {
  console.log("children4");
  setTimeout(() => {
    console.log("children5");
    // 这里并不会立即将then回调加入到微任务队列，只有当settimeout执行后才会
    resolve("children6");
  }, 0);
}).then((res) => {
  console.log("children7");
  setTimeout(() => {
    console.log(res);
  }, 0);
});
