const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'

class MyPromise2 {
  constructor(fn) {
    this.type = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolveCallback = []
    this.rejectCallback = []

    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)

    try {
      fn(this.resolve, this.reject)
    } catch (error) {
      console.log(error)
      this.reject(error)
    }
  }

  resolve(val) {
    if (this.type === PENDING) {
      this.type = FULFILLED
      this.value = val
      this.resolveCallback.forEach((fn) => {
        fn(this.value)
      })
    }
  }
  reject(val) {
    if (this.type === PENDING) {
      this.type = REJECTED
      this.reason = val
      this.rejectCallback.forEach((fn) => {
        fn(this.value)
      })
    }
  }

  then(onFulfilled, onRejected) {
    console.log('then---')
    // 解决onFulfilled, onRejected没有传值的问题
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
    // 因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后then的resolve中捕获
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error
          }

    let origin = new MyPromise2((resolve, reject) => {
      if (this.type === PENDING) {
        console.log('then --- PENDING')
        // 加入 回调方法
        this.resolveCallback.push((value) => {
          parse(origin, onFulfilled, value, resolve, reject)
        })
        this.rejectCallback.push((value) => {
          parse(origin, onRejected, value, resolve, reject)
        })
      } else if (this.type === FULFILLED) {
        console.log('then --- fulfilled')
        setTimeout(() => {
          parse(origin, onFulfilled, this.value, resolve, reject)
        }, 0)
      } else if (this.type === REJECTED) {
        console.log('then --- rejected')
        // 失败提交
        setTimeout(() => {
          parse(origin, onRejected, this.reason, resolve, reject)
        }, 0)
      }
    })
    return origin
  }
}

function parse(origin, fn, value, resolve, reject) {
  console.log('执行')
  try {
    let result = fn(value)
    if (origin === result) {
      throw new Error('不能返回相同的promise')
    }
    if (result instanceof MyPromise2) {
      // 返回新的promise
      result.then(resolve, reject)
    }
  } catch (error) {
    console.log(error)
    reject(error)
  }
}

MyPromise2.prototype.all = function (arr) {
  let newArr = {}
  return new Promise((resolve, reject) => {
    arr.forEach((promise, i) => {
      promise.then(
        (val) => {
          newArr[i] = val
          if (Object.keys(newArr) === arr.length) {
            resolve(Object.keys(newArr).map((i) => newArr[i]))
          }
          return val
        },
        (reason) => {
          reject(reason)
        }
      )
    })
  })
}

module.exports = MyPromise2
