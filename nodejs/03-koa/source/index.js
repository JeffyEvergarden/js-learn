/*
 *
 * @Author: Jeffy
 * @Date: 2021-04-06 22:11:17
 * @Last Modified by: Jeffy
 * @Last Modified time: 2021-04-08 18:49:07
 */
const http = require('http')

const context = require('./context')
const request = require('./request')
const response = require('./response')

class Koa {
  constructor() {
    this.middlewares = []
  }

  listen(...args) {
    const server = http.createServer(async (req, res) => {
      const ctx = this.createContext(req, res)
      const fn = this.compose(this.middlewares)
      await fn(ctx)
      res.end(ctx.body)
    })
    server.listen(...args)
  }

  createContext(req, res) {
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)
    ctx.request.req = req
    ctx.response.res = res
    return ctx
  }
  use(callback) {
    this.middlewares.push(callback)
  }

  // 洋葱圈 责任链模式
  compose(middlewares) {
    function dispatch(content, i) {
      let fn = middlewares[i]
      if (!fn) {
        return Promise.resolve()
      }
      return Promise.resolve(
        fn(content, function next() {
          return dispatch(content, i + 1)
        })
      )
    }

    return function (ctx) {
      return dispatch(ctx, 0)
    }
  }
}

module.exports = Koa
