const http = require('http')

const session = {} // 内存保存

const server = http.createServer((req, res) => {
  console.log('cookie', req.headers.cookie)
  const { cookie } = req.headers
  const sessionKey = 'sid'
  // 有sessionkey时
  if (cookie && cookie.indexOf(sessionKey) > -1) {
    res.end('come back')
    const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
    const sid = pattern.exec(cookie)[1]
    console.log('session:', sid, session, session[sid])
  } else {
    // 无 sessionkey时创建新的
    const sid = (Math.random() * 99999).toFixed()
    res.setHeader('Set-Cookie', `${sessionKey}=${sid};`)
    session[sid] = {
      name: '老王',
    }
  }
  res.end('hello')
})

server.listen(8001, () => {
  console.log('listen at 3000')
})
