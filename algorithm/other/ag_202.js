let x = 82

var getNext = function (n) {
  let i = 0
  while (n) {
    m = n % 10
    i = Math.pow(m, 2) + i
    n = parseInt(n / 10)
  }
  return i
}

var isHappy = function (n) {
  let p = n,
    q = n
  do {
    p = getNext(p)
    q = getNext(getNext(q))
  } while (p != q)
  return q === 1
}

console.log(isHappy(x))
