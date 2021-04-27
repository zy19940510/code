// 快速排序 二分法
function quickSort(arr) {
  let midIndex = Math.floor(arr.length / 2);
  let midItem = arr[midIndex];
  let left = [];
  let right = [];
  for (const i of arr) {
    if (arr[i] < midItem) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([midItem], quickSort(right));
}
