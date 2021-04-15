const Koa = require('koa')
const session = require('koa-session')

const app = new Koa()
app.keys = ['some key']

const SESS_CONFIG = {
  httpOnly: true, //设置为true js可以读到，设置为false js不可读取
  signed: false, // 签名，防篡改
}

app.use(session(SESS_CONFIG, app))

app.use((ctx) => {
  if (ctx.path === '/favicon.ico') return

  let n = ctx.session.count || 0
  ctx.session.count = ++n
  ctx.body = `第${n}次访问`
})

app.listen(3000, () => {
  console.log('server at 3000')
})
