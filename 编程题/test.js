// console.log([1,2,3].map(parseInt));
// var a = { n: 1 };
// var b = a;
// a.x = a = { n: 2 };
// console.log(a, b);
// console.log(parseFloat((0.1 + 0.2).toFixed(2)));

// (function () {
//   alert(a);
//   a();
//   var a = function () {
//     console.log(1);
//   };
//   function a() {
//     console.log(2);
//   }
//   alert(a);
//   a();
//   var c = (d = a);
// })();
// alert(d);
// alert(c);

// function say() {
//   console.log(...arguments);
//   console.log(this.x);
// }
// var a = say.bind({ x: 1 }, 1, 2, 3);
// var b = a.bind({ x: 2 }, 4, 5, 6);
// a(7, 8, 9);
// b(7, 8, 9);
// function format(num) {
//   var str = num+'';
//   return str.split("").reverse().reduce((prev, next, index) => {
//     return ((index % 3) ? next : (next + ',')) + prev;
//   })
// }
// let num = 1234567890;
// console.log(format(num));
function add(x) {
  return x + 1;
}
function multi(x) {
  return x * 10;
}
console.log(multi(add(2)));