// 快速排序 二分法
function quickSort(array) {
  if (array.length < 2) return array;
  let pivot = array[array.length - 1];
  let left = array.filter((v, i) => v <= pivot && i != array.length - 1);
  let right = array.filter((v) => v > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([2, 1, 3, 5, 4, 8, 6, 4]));
