function getUrlParams(url) {
  const result = {}

  const reg = /[?&][^?&]+=[^?&]+/g

  const arr = url.match(reg)

  console.log(arr)
  if (arr) {
    arr.forEach((ele) => {
      let item = ele.split('=')
      let name = item[0].substring(1)
      result[name] = decodeURI(item[1])
    })
  }
  console.log(result)
}

let url = 'https://www.bilibili.com/video/BV1GQ4y1o7zz?fuck=a&nmd=1234'

url.substr(3, 10)
console.log(url.substr(3, 10))
getUrlParams(url)
