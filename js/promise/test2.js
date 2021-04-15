var MyPromise = require('./myPromise')

let c = new MyPromise((resolve) => {
  resolve(1)
})

let p = c.then(
  (i) => {
    console.log(i)
    return p
  },
  (err) => {
    // 实际上这步被忽略了
    console.log('then err', err)
    throw new Error('fuck then')
  }
)
