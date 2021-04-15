const fs = require('fs')
const http = require('http')

const server = http.createServer((request, response) => {
  const { url, method, headers } = request
  // 页面
  if (url === '/' && method === 'GET') {
    fs.readFile('../../public/index.html', (err, data) => {
      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8',
        })
        response.end('500-error')
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
    // JSON
  } else if (url === '/user') {
    response.writeHead(200, {
      'Content-Type': 'application/json',
    })
    response.end("{'hello': 10}")
    // 图片
  } else if (method === 'GET' && headers.accept.indexOf('image/*') > -1) {
    // fs.readFile
    console.log(url)
    fs.createReadStream('../../public' + url).pipe(response)
  }
})

server.listen(3000)

function getPrototypeChain(obj) {
  var chain = []
  while ((obj = Object.getPrototypeOf(obj))) {
    chain.push(obj)
  }
  return chain
}
