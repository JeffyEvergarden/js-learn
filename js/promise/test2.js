var MyPromise = require('./myPromise2')

let c = new MyPromise((resolve) => {
  resolve(1)
})

let p = c.then(
  (i) => {
    console.log(i)
    return new MyPromise((resolve) => {
      resolve(3)
    })
  },
  (err) => {
    // 实际上这步被忽略了
    console.log('then err', err)
    throw new Error('fuck then')
  }
)
