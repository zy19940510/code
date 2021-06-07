// 将一个时间转换为几秒前、几天前、几月前

function transformTime(time) {
  const now = Date.now();
  time = parseInt((now - time * 1000) / 1000);
  // 从现在到传入的时间过去了多少秒
  console.log(time);
  if (time < 60) {
    return `${time}秒前`;
  } else if (time >= 24 * 60 * 60 && time < 24 * 60 * 60 * 30) {
    return `${Math.floor(time / 60 / 60 / 24)}天前`;
  } else {
    return `${Math.floor(time / 60 / 60 / 24 / 30)}月前`;
  }
}

console.log(transformTime(1621762480));
