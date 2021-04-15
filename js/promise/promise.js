let p1 = new Promise((resolve) => {
  resolve(1)
})

p1.then(
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
