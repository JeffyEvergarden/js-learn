let x = -123

var reverse = function (x) {
  const MAX = Math.pow(2, 32) - 1
  const MIN = -Math.pow(2, 31)
  let arr = []
  let num = x
  while (num !== 0) {
    let i = num % 10
    num = parseInt(num / 10)
    arr.push(i)
  }
  let y = 0
  for (i = 0; i < arr.length; i++) {
    y = y * 10 + arr[i]
    console.log(y)
  }
  if (y >= MAX || y <= MIN) {
    return 0
  }
  return y
}

console.log(reverse(x))
