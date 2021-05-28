function formatDate(time, str) {
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hour = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()
  const week = ['日', '一', '二', '三', '四', '五', '六']
  const day = week[time.getDay()]
  str = str
    .replace('yyyy', year)
    .replace('MM', formateNumer(month))
    .replace('M', month)
    .replace('dd', formateNumer(date))
    .replace('d', date)
    .replace('HH', formateNumer(hour))
    .replace('H', hour)
    .replace('mm', formateNumer(minute))
    .replace('m', minute)
    .replace('ss', formateNumer(second))
    .replace('s', second)
    .replace('w', day)

  return str
}

function formateNumer(num) {
  if (num < 10) {
    return '0' + num
  }
  return num.toString()
}

function strLength(s, bUnicode255For1) {
  let length = s.length
  if (!bUnicode255For1) {
    for (let i in s) {
      if (s.charCodeAt(i) > 255) {
        length++
      }
    }
    return length
  }
}
