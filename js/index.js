const fn1 = async function () {
  console.log('fn1 --start')
  let f = await fn2(2)
  console.log('fn1 ---end')
}

const fn2 = async function () {
  return new Promise((resolve) => {
    console.log('fn2')
    resolve()
  }).then(() => {
    console.log('fn2-2')
  })
}

console.log('script --- start')

fn1()

console.log('script --- end')

new Promise((resolve) => {
  resolve()
}).then(() => {
  console.log('fn3')
})

setTimeout(() => {
  console.log('fn4')
}, 0)
