/**
 * 力扣21题
 * 思路：利用递归，比较头结点大小
 * 小的那个.next指向其余全部节点的合并结果
 * 如果其中有一个为null了，那就直接返回另一个
 */
const mergeTwoLists = (l1, l2) => {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
