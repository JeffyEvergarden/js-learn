const { Dependency } = require('webpack')

function defineReactive(obj, key, value) {
  let dep = new Dep()
  let current
  Object.defineProperty(obj, key, {
    get() {},
    set(val) {},
  })
}
