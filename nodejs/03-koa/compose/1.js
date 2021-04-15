function compose(middlewares) {
  function dispatch(i) {
    console.log(i)
    let fn = middlewares[i]
    if (!fn) {
      return Promise.resolve()
    }
    return Promise.resolve(
      fn(function next() {
        return dispatch(i + 1)
      })
    )
  }

  return function () {
    return dispatch(0)
  }
}

async function fn1(next) {
  console.log('fn1')
  next()
  console.log('end fn1')
  return 0
}
async function fn2(next) {
  console.log('fn2')
  next()
  console.log('end fn2')
  return 0
}
function fn3(next) {
  console.log('fn3')
  return 0
}

const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn(() => {
  console.log('fn')
})
