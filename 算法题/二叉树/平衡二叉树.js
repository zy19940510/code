// 判断二叉树是否是平衡的
// 平衡二叉树：左右子树高度差的绝对值小于等于1
function isBalanced(root) {
  if (!root) return true;
  return (
    Math.abs(depth(root.left) - depth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );

  function depth(root) {
    if (!root) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1;
  }
}
