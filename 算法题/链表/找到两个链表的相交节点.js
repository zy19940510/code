/**
 * 力扣
 * 思路：
 * 如果两个链表相交
 * 公共路径是c，非公共路径a、b
 * 那么a+c+b = b+c+a
 * 所以当一条链表遍历完之后，开始走另一条联调的头结点
 * 直到重合
 */

function getIntersectionNode(headA, headB) {
  let n1 = headA,
    n2 = headB;
  while (n1 || n2) {
    if (n1 === n2) return n1;
    n1 = n1 === null ? headB : n1.next;
    n2 = n2 === null ? headA : n2.next;
  }
  return null;
}
