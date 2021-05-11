// 终止条件：当前节点为空(返回null)、root和p、q节点相等(返回root)
// 分别递归左右子树
// 四种情况：left和right同时为空、同时不为空，一个空另一个不空
function lowestCommonAncestor(root, p, q) {
  if (!root || root == p || root == q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  // 如果left为空，说明左子树不包含p,q，说明公共节点是右子树
  if (left == null) return right;
  // 如果right为空，说明公共节点是左子树
  if (right == null) return left;
  // 如果都不为空， p, q 分列在 root 的 异侧 （分别在 左 / 右子树），说明公共节点是root
  return root;
}
