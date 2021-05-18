// leetcode160题
// 编写一个程序，找到两个单链表相交的起始节点。
function getIntersectionNode(headA, headB) {
  let [a, b] = [headA, headB]
  while(a !== b) {
    a = a === null ? headB :a.next
    b = b === null ? headA :b.next
  }
  return a
}