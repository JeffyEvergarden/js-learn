var MyPromise = require('./myPromise')

console.log('----------')
// const a = new MyPromise((r, j) => {
//   setTimeout(() => {
//     r(1)
//   }, 2000)
// })
//   .then((value) => {
//     console.log(value)
//     return 2
//   })
//   .then((value) => {
//     console.log(value)
//     return 3
//   })

console.log('----------')

// let b = new MyPromise((resolve) => {
//   resolve(1)
// })

// b.then(
//   (i) => {
//     console.log(i)
//     throw new Error('fuck')
//   },
//   (err) => {
//     // 实际上这步被忽略了
//     console.log('then err', err)
//     throw new Error('fuck then')
//   }
// )
//   .catch((err) => {
//     console.log('catch', err)
//     throw new Error('fuck2')
//   })
//   .catch((err) => {
//     console.log('catch2', err)
//   })

console.log('----------')

let c = new MyPromise((resolve) => {
  resolve(1)
})

c.then(
  (i) => {
    console.log(i)
    return i + 1
  },
  (err) => {
    // 实际上这步被忽略了
    console.log('then err', err)
    throw new Error('fuck then')
  }
)
  .catch((err) => {
    console.log('catch', err)
    throw new Error('fuck2')
  })
  .catch((err) => {
    console.log('catch2', err)
  })
  .then((i) => {
    console.log(i)
  })
