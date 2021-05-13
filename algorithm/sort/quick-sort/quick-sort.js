// 普通快排

const array = [2, 7, 4, 5, 1, 6, 10, 9]

function main(array) {
  let l = 0
  let r = array.length - 1
  quickSort(array, l, r)
  console.log(array)
}

function quickSort(arr, l, r) {
  if (l > r) {
    return
  }
  let base = arr[l]
  let x = l,
    y = r
  while (x < y) {
    while (x < y && arr[y] >= base) {
      y--
    }
    if (x < y) {
      arr[x++] = arr[y]
    }
    while (x < y && arr[x] < base) {
      x++
    }
    if (x < y) {
      arr[y] = arr[x]
    }
  }
  arr[x] = base

  quickSort(arr, l, x - 1)
  quickSort(arr, x + 1, r)
}

main(array)
