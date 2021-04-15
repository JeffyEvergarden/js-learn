const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'

class BasePromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.value = value
      this.status = FULFILLED
      this.onResolvedCallbacks.forEach((fn) => {
        fn(this.value)
      })
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.reason = reason
      this.status = REJECTED
      this.onRejectedCallbacks.forEach((fn) => {
        fn(this.reason)
      })
    }
  }
  // 只能处理包含一个then方法,并接收两个参数onFulfilled, onRejected
  then(onFulfilled, onRejected) {
    // 成功提交
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    } else if (this.status === REJECTED) {
      // 失败提交
      onRejected(this.reason)
    } else if (this.status === PENDING) {
      // 如果promise的状态是PENDING，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次执行对应的函数
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }

  catch() {}
}

class FullPromise extends BasePromise {
  constructor(executor) {
    super(executor)
  }

  // 重写基类的方法
  then(onFulfilled, onRejected) {
    // 解决onFulfilled, onRejected没有传值的问题
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
    // 因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后then的resolve中捕获
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error
          }

    // 异步执行，放到下一步
    let origin = new FullPromise((resolve, reject) => {
      if (this.status === PENDING) {
        // 加入 回调方法
        this.onResolvedCallbacks.push((value) => {
          parse(origin, onFulfilled, value, resolve, reject)
        })
        this.onRejectedCallbacks.push((value) => {
          parse(origin, onRejected, value, resolve, reject)
        })
      } else if (this.status === FULFILLED) {
        setTimeout(() => {
          parse(origin, onFulfilled, this.value, resolve, reject)
        }, 0)
      } else if (this.status === REJECTED) {
        // 失败提交
        setTimeout(() => {
          parse(origin, onRejected, this.reason, resolve, reject)
        }, 0)
      }
    })

    return origin
  }

  catch(onRejected) {
    this.onRejectedCallbacks = []
    let onFulfilled = (v) => v
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            return error
          }

    let origin = new FullPromise((resolve, reject) => {
      if (this.status === REJECTED) {
        // 失败提交
        setTimeout(() => {
          parse(origin, onRejected, this.reason, resolve, reject)
        }, 0)
      } else if (this.status === PENDING) {
        this.onResolvedCallbacks.push((value) => {
          parse(origin, onFulfilled, this.value, resolve, reject)
        })
        this.onRejectedCallbacks.push((value) => {
          parse(origin, onRejected, value, resolve, reject)
        })
      } else if (this.status === FULFILLED) {
        console.log('catche FULFILLED:' + this.value)
        parse(origin, onFulfilled, this.value, resolve, reject)
      }
    })
    return origin
  }
}

function parse(origin, fn, val, resolve, reject) {
  let flag = 0
  try {
    let result = fn(val)
    if (result === origin) {
      flag = 1
      throw new Error('same key')
    }
    if (result instanceof FullPromise) {
      result.then(resolve, reject)
    } else {
      resolve(result)
    }
  } catch (error) {
    console.log(error)
    if (flag === 0) {
      reject(error)
    }
  }
}

module.exports = FullPromise
