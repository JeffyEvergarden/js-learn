const fs = require('fs')

// 异步错误优先

// fs.readFile('./index.js', (err, data) => {
//   console.log('data2', data instanceof Buffer, data.toString())
// })

function read() {
  let data = fs.readFileSync('./index.js')
  console.log('data', data instanceof Buffer, data.toString())
  return data.toString()
}

exports.read = read
