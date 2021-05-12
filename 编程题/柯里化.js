function curry(func) {
  return function curried(...args) {
    // console.log(args.length); // curriedLog实参的长度: 3
    // console.log(func.length); // func形参的长度: 3
    // 如果传入的参数长度比func相同或者更多，说明一次性将所有参数都接收了,只需将调用传递给func
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      // 如果传入的参数长度小于func的参数长度，则说明需要拆分每个参数调用，缓存之前的参数
      return function pass(...args2) {
        // 将上次传入参数连接起来, 再调用一次curried，目的是将所有参数合并起来
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function func(a, b, c) {
  return console.log(a, b, c);
}

const curriedLog = curry(func); // 返回了一个curried包装器

curriedLog(1)(2)(3);

/**
 * 1、第一个调用 curried(1) 将 1 保存在词法环境中，然后返回一个包装器 pass。
 * 2、包装器 pass 被调用，参数为 (2)：它会获取之前的参数 (1)，将它与得到的 (2) 连在一起，并一起调用 * curried(1, 2)。由于参数数量仍小于 3，curry 函数依然会返回 pass。
 * 3、包装器 pass 再次被调用，参数为 (3)，在接下来的调用中，pass(3) 会获取之前的参数 (1, 2) 并将 3 与之合并，执行调用 curried(1, 2, 3) — 最终有 3 个参数，它们被传入最原始的函数中。
*/
