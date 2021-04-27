/**求二叉树的最大深度 */
// dfs递归
function maxDepth(root) {
  // 节点为空则终止，返回0
  if (!root) return 0;
  // 节点不为空时则分别求左右子树的高度的最大值，同时加1表示当前节点的高度，返回该数值
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
