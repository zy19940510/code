function myNew() {
  // 创建空对象
  let obj = new Object();
  // 获得构造函数
  let Con = [].shift.call(arguments);
  // 链接到构造函数原型
  obj.__proto__ = Con.prototype;
  // 绑定this，并执行构造函数
  let result = Con.apply(obj, arguments);
  // 确保new出来的是个对象
  return typeof result === "object" ? result : obj;
}
