/**
 * 力扣349
 */
const nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

function intersection(nums1, nums2) {
  return [...new Set(nums1)].filter((item) => nums2.includes(item));
}
console.log(intersection(nums1, nums2));
