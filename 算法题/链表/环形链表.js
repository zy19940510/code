// leetcode 141题
// 给定一个链表，判断链表中是否有环。
function hasCycle(head) {
  if(!head || !head.next) return false
  let fast = head.next.next, slow = head.next
  while(fast !== slow) {
    if(!fast || !fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true
}