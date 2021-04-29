// 力扣第一题
function towSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let k = target - num;
    if (map.has(k)) return [map.get(k), i];
    map.set(num, i);
  }
}
