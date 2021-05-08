function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.trace();
}
// a();

// 利用尾调用优化
// 尾调用优化只在严格模式下有效。
// 尾调用优化后，每次 return 的内层函数的调用记录会取代外层函数的调用记录，调用栈中始终只保持一条调用帧。

function A() {
  return B();
}
function B() {
  return C();
}
function C() {
  console.trace();
}
// A();

