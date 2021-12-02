/**
 * 力扣88题: 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * https://github.com/sisterAn/JavaScript-Algorithms/issues/3
 * 思路：
 * nums1 、 nums2 有序，若把 nums2 全部合并到 nums1 ，则合并后的 nums1 长度为 m+n
 * 我们可以从下标 m+n-1 的位置填充 nums1 ，比较 nums1[len1] 与 nums2[len2] 的大小，将较大值写入 nums1[len]，即:
 * 假如 nums1[len1]>=nums2[len2] ，name nums1[len--] = nums1[len1--] ,这里 -- 是因为写入成功后，下标自动减1，继续往前比较
 * 否则 nums1[len--] = nums2[len2--]
 * 边界条件：
 * 若 len1 < 0 且 len2 >= 0 ，此时 nums1 已合并完成， nums2 还未合并完，仅仅需要将 nums2 的剩余元素写入 nums1 即可，写入后，合并完成
 * 若 len2 < 0，此时 nums2 已全部合并到 nums1 ，合并完成
 */

const merge = function (nums1, m, nums2, n) {
  let len1 = m - 1,
    len2 = n - 1,
    len = m + n - 1;
  while (len2 >= 0) {
    if (len1 < 0) {
      nums1[len--] = nums2[len2--];
      continue;
    }
    nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
};
