var obj = {
  name: 'fuck',
  getName() {
    console.log(this.name)
    console.log(Array.from(arguments))
  },
}

var obj2 = {
  name: 'fuck2',
}

Function.prototype._call = function (content) {
  const ob = content || global
  ob.func = this
  const arg = Array.from(arguments).slice(1)
  ob.func(...arg)
  delete ob.func
}

obj.getName._call(obj2, 1, 2)

Function.prototype._apply = function (content, args) {
  const ob = content || global
  ob.func = this
  var result = ob.func(...args)
  delete ob.func
  return result
}

obj.getName._apply(obj2, [1, 2])

Function.prototype._bind = function (content) {
  const ob = content || global
  let arg = Array.prototype.slice.call(arguments, 1)
  const cur = this
  return function () {
    const args = Array.prototype.concat.apply(arg, arguments)
    cur._call(ob, ...args)
  }
}

const fun = obj.getName._bind(obj2, 1, 2, 3)

fun(2, 4, 6)
console.log('end-------------')
