function convert(list) {
  const ret = [];
  // 生成一个map，用id为key，节点为value，用{}作为初始值
  const map = list.reduce((res, v) => {
    res[v.id] = v;
    return res
  }, {});
  console.log(map);
  for (const item of list) {
    if (item.parentId === 0) {
      ret.push(item);
      continue;
    }
    if (item.parentId in map) {
      const parent = map[item.parentId];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
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
