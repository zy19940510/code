function addTwoNumbers(l1, l2) {
  let prev = new ListNode(0);
  let cur = prev;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    const x = l1 === null ? 0 : l1.val;
    const y = l2 === null ? 0 : l2.val;
    let sum = x + y + carry;
    carry = sum > 9 ? 1 : 0;
    sum = sum % 10;
    cur.next = new ListNode(sum);
    cur = cur.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  if (carry === 1) {
    cur.next = new ListNode(carry);
  }
  return prev.next;
}
