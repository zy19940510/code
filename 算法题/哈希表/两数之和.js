/**
 * 力扣第一题
 * https://leetcode-cn.com/problems/two-sum/solution/qian-duan-jin-jie-suan-fa-liang-shu-zhi-he-by-user/
 * 思路：
 * 初始化一个 map = new Map()
 * 从第一个元素开始遍历 nums
 * 获取目标值与 nums[i] 的差值，即 k = target - nums[i] ，判断差值在 map 中是否存在
 * 存在的话直接返回[map.get(k), i]
 * 不存在的话将nums[i]存入到map中，value为i,方便通过get拿到下标
 * 遍历结束后如果没找到，直接返回[]
 */
const twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i];
    if (map.has(k)) {
      return [map.get(k), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
