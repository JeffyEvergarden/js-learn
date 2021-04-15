let nums1 = [1, 3]

let nums2 = [2]

var findMedianSortedArrays = function (nums1, nums2) {
  let num = []
  let i = 0,
    j = 0
  if (nums1.length === 0 || nums2.length === 0) {
    num = nums1.length === 0 ? num2 : num1
    if (num.length === 0) {
      return 0
    }
    if (num.length === 1) {
      return num[0]
    }
    let type = num.length % 2 === 1
    const n = parseInt(num.length / 2)
    // danshu
    if (!type) {
      return (num[n] + num[n - 1]) / 2
    } else {
      return num[n]
    }
  } else {
    let length = nums1.length + nums2.length
    let type = length % 2 === 1
    length = parseInt(length / 2)
    while (i < nums1.length && j < nums2.length && num.length - 1 < length) {
      if (nums1[i] < nums2[j]) {
        num.push(nums1[i])
        i++
      } else {
        num.push(nums2[j])
        j++
      }
    }
    while (i < nums1.length && num.length - 1 < length) {
      num.push(nums1[i])
      i++
    }
    while (j < nums2.length && num.length - 1 < length) {
      num.push(nums2[j])
      j++
    }

    if (!type) {
      return (num[length] + num[length - 1]) / 2
    } else {
      return num[length]
    }
  }
}

console.log(findMedianSortedArrays(nums1, nums2))
