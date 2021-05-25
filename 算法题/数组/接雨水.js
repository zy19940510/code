// leetcode42题

function trap(height) {
  if (!height.length) return 0;
  let res = 0;
  let n = height.length;
  let max_left = height[0];
  let max_right = height[n - 1];

  for (let i = 1; i < n; i++) {
    max_left = Math.max(height[i], height[i - 1]);
  }
  for (let i = n - 2; i >= 0; i--) {
    max_right = Math.max(height[i], height[i + 1]);
  }

  for (let i = 0; i < n; i++) {
    // 取当前索引的左边和右边最大高度，然后取较小者，再减去当前高度
    // 比如说当前高度是0，左边最大高度是2，右边最大高度是3，然后当前能接的雨水量就是 2 - 0 = 2
    res += Math.min(max_left[i], max_right[i]) - height[i];
  }

  return res;
}
