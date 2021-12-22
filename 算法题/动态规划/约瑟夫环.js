/**
 * 即 n 个人围成一个圈，这 n 个人的编号从 0——(n-1)， 第一个人（编号为 0 的人）从 1 开始报数，报数为 m 的人离开，再从下一个开始从 1 开始报数，报数为 m 的人离开，依次循环下去，直到剩下最后一个人（也可以剩最后两个，少循环一次就是了），那么，把最后一个人的编号打印出来 。
 */

function josephRing(n, m) {
  let arr = new Array(n).fill(1);
  let count = 0;
  let num = 0;
  while (count < n - 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        num++;
        if (num === m) {
          arr[i] = 0;
          count++;
          num = 0;
        }
      }
    }
  }
  let winner = arr.findIndex((item) => item === 1);
  console.log(winner, 'is the winner', arr);
}

josephRing(10, 3)