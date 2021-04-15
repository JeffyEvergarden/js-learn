const Koa = require('Koa')

const app = new Koa()

const port = 3000

app.listen(port, () => {
  console.log('app start at' + port)
})
