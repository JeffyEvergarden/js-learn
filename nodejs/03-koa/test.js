

function union(f1, f2) {
  return function (...args) {
    f1(f2(...args))
  }
}

function compose(middlewares) {
  return middlewares.reduce(union)
}

async function fn1(next) {
  console.log('fn1')
  console.log('end fn1')
  return 0
}
async function fn2(next) {
  console.log('fn2')
  console.log('end fn2')
  return 0
}
function fn3(next) {
  console.log('fn3')
  return 0
}

const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn(() => {})
