let nums = [
  24,
  12,
  71,
  33,
  5,
  87,
  10,
  11,
  3,
  58,
  2,
  97,
  97,
  36,
  32,
  35,
  15,
  80,
  24,
  45,
  38,
  9,
  22,
  21,
  33,
  68,
  22,
  85,
  35,
  83,
  92,
  38,
  59,
  90,
  42,
  64,
  61,
  15,
  4,
  40,
  50,
  44,
  54,
  25,
  34,
  14,
  33,
  94,
  66,
  27,
  78,
  56,
  3,
  29,
  3,
  51,
  19,
  5,
  93,
  21,
  58,
  91,
  65,
  87,
  55,
  70,
  29,
  81,
  89,
  67,
  58,
  29,
  68,
  84,
  4,
  51,
  87,
  74,
  42,
  85,
  81,
  55,
  8,
  95,
  39,
]

let limit = 87

var longestSubarray = function (nums, limit) {
  if (limit < 0) {
    return 0
  }
  let arr = [0, 0]
  let mylimit = 0
  for (let i = 0; i < nums.length; i++) {
    let current = [i, i]
    let max = nums[i]
    let min = nums[i]
    let currentlimit = 0
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > max) {
        let x = Math.abs(nums[j] - min)
        if (x <= limit) {
          current[1] = j
          currentlimit = x
          max = nums[j]
        } else {
          break
        }
      } else if (nums[j] < min) {
        let x = Math.abs(max - nums[j])
        if (x <= limit) {
          current[1] = j
          currentlimit = x
          min = nums[j]
        } else {
          break
        }
      } else {
        current[1] = j
      }
    }
    if (current[1] - current[0] > arr[1] - arr[0]) {
      mylimit = currentlimit
      arr = current
      console.log(max + ' ' + min)
    }
    if (arr[1] - arr[0] > nums.length - i - 2) {
      return arr[1] - arr[0] + 1
    }
  }
  return arr[1] - arr[0] + 1
}

console.log(longestSubarray(nums, limit))
