// 左递归法

// 单边递归

//  【    小     [基准值]    大  (这边才用递归)     】

// 主要减少空间复杂度


const array = [2, 7, 4, 5, 1, 6, 10, 9]

function main(array) {
  let l = 0
  let r = array.length - 1
  quickSort(array, l, r)
  console.log(array)
}

main(array)

function quickSort(arr, l, r) {
  while (l < r) {
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
    quickSort(arr, x + 1, r)
    r = x - 1
  }
}
