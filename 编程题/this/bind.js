Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let self = this;
  let args = [...arguments].slice(1);
  return function F() {
    // 直接new的话就直接返回new self
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, args.concat(...arguments));
  };
};