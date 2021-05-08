// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
const nums = [1, 2, 3, 4]

var exchange = function (nums) {
  if (nums.length === 0) return
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    //
    while (nums[l] % 2 === 1) {
      l++
    }
    while (nums[r] % 2 === 0) {
      r--
    }
    if (l < r) {
      swap(nums, l, r)
    }
  }
}

function swap(arr, a, b) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

exchange(nums)
console.log(nums)