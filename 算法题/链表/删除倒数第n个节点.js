/**
 * 力扣19题
 * 思路：利用快慢节点
 * 快节点先走n步，当快节点走到头的时候
 * 慢节点就是倒数第n个节点
 * 然后把慢节点.next指向.next.next就行了
 */
var removeNthFromEnd = function (head, n) {
  let preNode = new ListNode(0);
  preNode.next = head;
  let fast = preNode,
    slow = preNode;
  while (n--) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return preNode.next;
};
