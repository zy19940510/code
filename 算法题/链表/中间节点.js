/**
 * 力扣876题
 * 思路：快慢指针
 * 相同起点，快的一次走两步，慢的一次走一步
 * 快的走完，慢的刚好就是中间的那个节点
 */
function middleNode(head) {
  let fast = head, slow = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}