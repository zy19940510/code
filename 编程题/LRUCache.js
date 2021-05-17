// class LRUCache {
//   constructor(max) {
//     this.keys = [];
//     this.cache = Object.create(null);
//     this.max = max;
//   }
//   get(key) {
//     if (this.cache[key]) {
//       this.remove(this.keys, key);
//       this.keys.push(key);
//       return this.cache[key];
//     }
//   }
//   put(key, value) {
//     if (this.cache[key]) {
//       this.cache[key] = value;
//       this.remove(this.keys, key);
//       this.keys.push(key);
//     } else {
//       this.keys.push(key);
//       this.cache[key] = value;
//       if (this.keys.length > this.max) {
//         const key = this.keys.shift();
//         this.cache[key] = null;
//       }
//     }
//   }
//   remove(arr, item) {
//     if (arr.length) {
//       const index = arr.indexOf(item);
//       if (index > -1) {
//         return arr.splice(index, 1);
//       }
//     }
//   }
// }

const LRUCache = function (max) {
  this.cache = new Map();
  this.max = max;
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const temp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, temp);
    return temp;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.max) {
    // 最重要的地方：当缓存满了的时候
    // 将第一个缓存删除，使用map.key().next().value可以拿到第一个
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};

let cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回  3
console.log(cache.get(4)); // 返回  4
