const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (val, key) => hasOwnProperty.call(val, key)

let obj = { a: 10 }

let obj2 = Object.create(obj)
let obj3 = Object.create(obj2)
obj3.c = 40
let proxy = new Proxy(obj3, {
  get(target, key, value, receiver) {
    return Reflect.get(target, key)
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    return true
  },
})

let proxy2 = new Proxy(obj3, {
  has(target, key, value, receiver) {
    return Reflect.get(target, key)
  },
})


// 关系是 obj3 ---> obj2 ---> obj


// target只为代理的对象 target === obj   => true
console.log(proxy.a) // 10
// 删除不掉
delete proxy.a
// 依然能输出
console.log(proxy.a)
// 输出 in
console.log('c' in proxy) // true
console.log('a' in proxy) // true  _proto_对象也能
console.log('b' in proxy) // false
console.log('a' in proxy2) // true
console.log(hasOwn(obj3, 'a')) // false 继承的获取不到
console.log(hasOwn(proxy, 'a')) // false 代理也一样
