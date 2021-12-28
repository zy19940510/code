"use strict";

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);
  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);
  console.log(descriptor);
  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
  return value;
}

var _name = new WeakMap();
/**
 * 实现思路就是将class的私有属性存到了全局的一个weakMap里
 * key是class，value为私有属性的value
 */
class Person {
  constructor(name, age) {
    _name.set(this, {
      writable: true,
      value: void 0,
    });

    _classPrivateFieldSet(this, _name, name);

    this.age = age;
  }

  greet() {
    console.log(
      "hi, i'm "
        .concat(_classPrivateFieldGet(this, _name), " and i'm ")
        .concat(this.age, " years old")
    );
  }
}

const person = new Person("zy", 27);
console.log(person.name);
person.greet();
