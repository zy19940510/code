// leetcode46题
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
function backtrack(list, tempList, nums) {
  // 终止条件,如果长度一样说明已经符合全排列了
  if (tempList.length === nums.length) return list.push([...tempList]);
  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) continue; // 判断当前节点是否已存在
    tempList.push(nums[i]); // 把当前节点推入
    backtrack(list, tempList, nums); // 递归
    tempList.pop(); // 回溯
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const list = [];
  backtrack(list, [], nums);
  return list;
};
