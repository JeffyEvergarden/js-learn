function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      const val = Reflect.get(target, key)
      track(target, key)
      return typeof val === 'object' ? reactive(val) : val
    },
    set(target, key, val) {
      // console.log(`set: ${key}`) 
      // 出发trigger
      const ret = Reflect.set(target, key, val)
      trigger(target, key)
      return ret
    },
    deleteProperty(target, key) {
      // console.log(`delete: ${key}`)
      trigger(target, key)
      return Reflect.deleteProperty(target, key)
    },
  })
}

const effectStack = []
//映射表
const targetMap = new WeakMap()

function effect(fn) {
  const e = createReactiveEffect(fn)
  // 立即执行一次 处理错误 放入effectStack
  e()
  return e
}

function createReactiveEffect(fn) {
  const effect = function () {
    try {
      effectStack.push(effect) // 放入
      return fn() // 执行
    } finally {
      effectStack.pop()
    }
  }
  return effect
}

// 依赖收集  weekmap (对象映射 获取 map)   map(key值 映射 set)  set 是 收集的是effect事件
function track(target, key) {
  // 尝试获取effect函数
  const effect = effectStack[effectStack.length - 1] // 取最后一个
  if (effect) {
    let depMap = targetMap.get(target) // 获取map

    if (!depMap) {
      // 如果不存在， 第一次收集
      depMap = new Map()
      targetMap.set(target, depMap) // 不存在就塞进 targetMap
    }
    let deps = depMap.get(key) // 获取set
    if (!deps) {
      deps = new Set()
      depMap.set(key, deps)
    }
    deps.add(effect) // 收集依赖
  }
}

// 依赖触发
function trigger(target, key) {
  let depMap = targetMap.get(target) // 获取map
  if (depMap) {
    let deps = depMap.get(key)
    deps.forEach((fn) => {
      fn()
    })
  }
}

const state = reactive({
  msg: 'hello world',
  obj: { msg: 10 },
})

effect(() => {
  state.msg
  console.log(state.msg)
})

state.msg = 'hello boy'
