// 不管成功与否，都会执行callback
Promise.prototype.finally = function (cb) {
  const constructor = this.constructor;
  return this.then(
    (value) => constructor.resolve(cb()).then(() => value),
    (reason) =>
      constructor.resolve(cb()).then(() => {
        throw reason;
      })
  );
};
