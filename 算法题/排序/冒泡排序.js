// 冒泡排序
function bubleSort(arr) {
  let len = arr.length - 1;
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubleSort([1, 3, 2, 5, 4, 10, 9, 8, 7, 6]));
