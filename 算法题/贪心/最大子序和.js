// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
function maxSubArray(nums) {
  let res = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum + num > num) sum += num;
    // 局部最优：负数会拉低总和，贪心的地方，为负数的时候立刻放弃，从下一个元素重新计算“连续和”
    if (sum + num <= num) sum = num;
    res = Math.max(res, sum);
  }
  return res;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

/**
 * 思路
 * 遍历当前数组，当前连续子序列的和为sum，结果为ans
 * 如果sum > 0，则说明 sum + nums[i] > nums[i]，意思就是加上当前这一项可以使sum更大，所以就加上num[i]
 * 如果sum < 0, 则说明加上当前这一项会使总和变小，所以就舍弃当前项
 * 每次比较ans和sum的大小，将最大值ans更新
 * 遍历结束返回结果
 * 时间复杂度O(n)
 */
