/**
 * 力扣131题
 * 思路：
 * 方法一：遍历时标记每一个节点，如果遇见已标记的节点，就有环
 * 方法二：利用JSON.stringify，不能序列化循环引用结构的特性
 * 方法三：利用快慢节点，如果有环，总会相遇
 * 跟跑步一样
 */

function hasCycle(head) {
  while (head) {
    if (head.flag) return true;
    head.flag = true;
    head = head.next;
  }
  return false;
}

function hasCycle(head) {
  try {
    JSON.stringify(head);
    return false;
  } catch (error) {
    return true;
  }
}

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head.next.next,
    slow = head.next;
  while (fast !== slow) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};
