const Koa = require('./source')
const Router = require('./router')
const app = new Koa()
const router = new Router()

app.use((ctx, next) => {
  console.log('next 1 start')
  ctx.body = 'fuck'
  next()
  console.log('next 1 end')
})

app.use((ctx, next) => {
  console.log('next 2 start')
  ctx.body = ctx.body + '-----'
  next()
  console.log('next 2 end')
})

router.get('/index', async (ctx) => {
  ctx.body = 'indexpage'
})
router.get('/post', async (ctx) => {
  ctx.body = 'postpage'
})
router.get('/list', async (ctx) => {
  ctx.body = 'listpage'
})
router.post('/index', async (ctx) => {
  ctx.body = 'postpage'
})

app.use(router.routes())

app.listen(8001, () => {
  console.log('运行在 8001')
})
