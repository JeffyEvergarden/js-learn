// 数组方式生成列表

let data = new Array(10)

let next = new Array(10)

data[3] = 10

function add(index, nextIndex, val) {
  next[index] = nextIndex
  data[nextIndex] = val
}

add(3, 5, 1)
add(5, 9, 2)
add(9, 0, 10)

function console1(i) {
  let p = data[i]
  while (p) {
    p = data[i]
    console.log(p)
    if (isNaN(p)) {
      break
    }
    console.log(p + '--->')
    i = next[i]
  }
}

console1(3)
