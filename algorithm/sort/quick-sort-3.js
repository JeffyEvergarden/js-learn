// 左递归法

// 单边递归

//  【    小     [基准值]    大  (这边才用递归)     】

// 主要减少空间复杂度

const array = [2, 7, 4, 5, 1, 6, 10, 9]

const threshold = 16

function main(array) {
  let l = 0
  let r = array.length - 1
  quickSort(array, l, r)
  console.log(array)
}

main(array)

function getMid(arr, a, b, c) {
  let tmp = 0
  if (arr[a] > arr[b]) {
    swap(arr, a, b)
  }
  if (arr[a] > arr[c]) {
    swap(arr, a, c)
  }
  if (arr[b] > arr[c]) {
    swap(arr, b, c)
  }

  // 返回中间那个值
  return arr[b]
}

function swap(arr, a, b) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function quickSort(arr, l, r) {
  while (r - l > threshold) {
    let base = getMid(arr, l, (l + r) / 2, r)
    let x = l,
      y = r
    do {
      while (x < y && arr[y] >= base) {
        y--
      }
      while (x < y && arr[x] < base) {
        x++
      }
      swap(arr, x, y)
      y--
      x++
    } while (x <= y)

    arr[x] = base
    quickSort(arr, x + 1, r)
    r = x - 1
  }
}
