function getVal() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10)
    }, 3000)
  })
}

function* gen() {
  var n = 1
  yield n++
  console.log('fuck')
  const val = yield getVal()
  yield n++
}

