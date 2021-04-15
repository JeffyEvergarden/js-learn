// 产生可迭代对象

function* nTimes(n) {
  if (n > 0) {
    yield* nTimes(n - 1)
    yield n - 1
  }
}
let gf = nTimes(3)
console.log(gf.next())
try {
  gf.throw(2)
} catch (error) {
  console.log(error)
}
console.log(gf.next())
console.log(gf.next())
