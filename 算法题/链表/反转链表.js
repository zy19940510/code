/**
 * 力扣206题
 * 思路：
 * 利用虚拟头节点pre,和cur节点
 */

var reverseList = function (head) {
  if (!head || !head.next) return head;
  let pre = null,
    cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  head = pre;
  return head;
};
