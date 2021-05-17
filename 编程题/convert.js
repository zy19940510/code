function convert(list) {
  const ret = [];
  // 生成一个map，用id为key，整个节点为value
  // 这样方便查询和拿到节点
  // 用空对象作为初始值进行迭代
  // 这里有一个非常巧妙的点，就是list中的对象，和map最终包含的对象引用是相同的
  // 这也是因为为什么后面map中的节点children属性变化了之后，list中的对象也变了
  const map = list.reduce((res, v) => {
    res[v.id] = v; // { 1: { id: 1, name: '部门A', parentId: 0 } }
    return res;
  }, {});
  // console.log(map);
  // 遍历list，生成tree
  for (const item of list) {
    // 如果节点的parentId是0，则说明是根节点，直接push进数组
    if (item.parentId === 0) {
      ret.push(item);
      continue;
    }
    // 如果不是0，并且不是未知节点
    if (item.parentId in map) {
      // 拿到parent节点
      const parent = map[item.parentId];
      // 因为可能children不是空的，则需要先判断
      parent.children = parent.children || [];
      // 往children里添加子节点
      parent.children.push(item);
    }
  }
  // console.log(ret);
  return ret;
}

let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];
const result = convert(list);
// console.log(result);
