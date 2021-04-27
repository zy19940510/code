// 数字后面加上n就是BigInt了
let x = 123456789n;
let y = 987654321n;

console.log((x * y).toString()); // 可以通过toString把n去掉
console.log(typeof x); // bigint
