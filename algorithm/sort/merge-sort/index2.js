const array = [2, 7, 4, 5, 1, 6, 10, 9, 8, 9]

function main(array) {
  let l = 0
  let r = array.length - 1
  mergeSort(array, l, r)
  console.log(array)
}

main(array)

function mergeSort(arr, l, r) {
  if (l >= r) {
    return
  }
  const mid = Math.floor((l + r) / 2)

  mergeSort(arr, l, mid)
  mergeSort(arr, mid + 1, r)

  mergeArray(arr, l, mid, r)
}

function mergeArray(arr, l, mid, r) {
  let i = l,
    j = mid + 1
  let newArr = []
  let k = l
  while (i <= mid || j <= r) {
    if ((i <= mid && arr[i] < arr[j]) || j > r) {
      newArr[k++] = arr[i++]
    } else {
      newArr[k++] = arr[j++]
    }
  }
  for (let i = l; i <= r; i++) {
    arr[i] = newArr[i]
  }
}
