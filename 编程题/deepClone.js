// 手写简单深拷贝
function deepClone(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }

  if (!isObject(obj)) {
    throw new Error('非对象')
  }

  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })

  return newObj
}

// Reflect.ownKeys和Object.keys有什么区别
// Reflect.ownKeys可以返回对象不可枚举的和以SymBol值为key的属性 
// Object.keys只能返回可枚举的属性