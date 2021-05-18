// 要求var obj = {year: 2018, month: 11, day:11} var str =“{year}年{month}月{day}日”
// 实现一个函数，输出2018年11月11日

let obj2 = { year: 2018, month: 11, day: 11 };
let str = "{year}年{month}月{day}日";
let reg = /\{(.*?)\}/g;
function render(str, obj) {
  if (!reg.test(str)) return;
  return str.replace(reg, (match, key) => obj[key]);
}
var result = render(str, obj2);
console.log(result); // 2018年11月11日
