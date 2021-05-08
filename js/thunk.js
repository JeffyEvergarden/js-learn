// ES5版本
var Thunk = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments)
    return function (callback) {
      console.log(callback)
      args.push(callback)
      console.log(args)
      return fn.apply(this, args)
    }
  }
}

const fn = Thunk(console.log)(1, 2)

fn(3)

console.log(1, 2, 3)
