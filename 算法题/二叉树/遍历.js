// 深度优先遍历
// 前序, 根节点 -> 左子树 -> 右子🌲
// 递归方式,有规律
function preorder(root) {
  let res = [];
  if (!root) return;
  res.push(root);
  preorder(root.left);
  preorder(root.right);
}
// 中序  左子树 ->  根节点 -> 右子🌲
function inorder(root) {
  let res = [];
  if (!root) return;
  inorder(root.left);
  res.push(root);
  inorder(root.right);
}
// 后序 左子树 -> 右子🌲 -> 根节点
function postorder(root) {
  let res = [];
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  res.push(root);
}
// 迭代方式，无规律
// 前序
function preorder(root) {
  let res = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
// 中序
function inorder(root) {
  let res = [];
  let stack = [];
  let node = root; // 临时移动指针
  while (stack.length || node) {
    // 先把左子树左节点压栈，最后入栈的就是左子树左叶子节点，所以最早出栈的也是它
    while (node) {
      stack.push(node);
      node = node.left;
    }
    // 出栈，从左子树左叶子节点往上走
    let n = stack.pop();
    res.push(n.val);
    // 右子节点
    node = n.right;
  }
}
// 后序 中左右 -> 中右左 -> 左右中
// 和前序有规律
function postorder(root) {
  let res = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    // 反过来
    res.unshift(node.val);
    // 左右反过来
    if (node.left) res.push(node.left);
    if (node.right) res.push(node.right);
  }
}
