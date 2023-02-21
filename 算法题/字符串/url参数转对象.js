// 用函数实现将URL中的参数转换成对象
// 例如：http://www.baidu.com?name=123&age=18
// 转换成 {name: 123, age: 18}

function urlToObj(url) {
    let obj = {};
    let arr = url.split('?')[1].split('&');
    arr.forEach(item => {
        let key = item.split('=')[0];
        let value = item.split('=')[1];
        obj[key] = value;
    });
    return obj;
}

// 测试
let url = 'http://www.baidu.com?name=123&age=18';
console.log(urlToObj(url));

