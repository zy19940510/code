// leetcode42题

// 利用动态规划，时间复杂度和空间复杂度都是O(n)
function trap(height) {
  if (!height.length) return 0;
  let res = 0;
  let n = height.length;
  let max_left = Array(n);
  let max_right = Array(n);

  // 第一个左边最大就是它自己
  max_left[0] = height[0]
  // 从第二个开始
  for (let i = 1; i < n; i++) {
    // 当前列左边最大高度等于：它左边那面墙的左边的最高高度和它的高度选一个较大的
    max_left[i] = Math.max(max_left[i - 1], height[i]);
  }

  // 最后一个右边最大就是他自己
  max_right[n - 1] = height[n - 1]
  // 从倒数第二个开始
  for (let i = n - 2; i >= 0; i--) {
    // 当前列右边最大高度等于：它右边那面墙的右边的最高高度和它的高度选一个较大的
    max_right[i] = Math.max(max_right[i + 1], height[i]);
  }

  // 因为两边的水肯定都是0，所以从1开始，到n - 1结束
  for (let i = 1; i < n - 1; i++) {
    // 取当前索引的左边和右边最大高度，然后取较小者，再减去当前高度
    // 比如说当前高度是0，左边最大高度是2，右边最大高度是3，然后当前能接的雨水量就是 2 - 0 = 2
    res += Math.min(max_left[i], max_right[i]) - height[i];
  }

  return res;
}

console.log(trap([4,2,0,3,2,5])); // 9