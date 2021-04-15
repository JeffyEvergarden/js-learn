const { MongoClient } = require('mongodb')
const { EventEmitter } = require('events')
const conf = require('./conf/conf')

class Mongodb {
  constructor() {
    this.conf = conf
    this.emiter = new EventEmitter()
    this.client = new MongoClient(conf.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    this.client.connect((err) => {
      if (err) throw err
      console.log('连接成功')
      this.emiter.emit('connect')
    })
  }

  // 返回集合
  col(colName, dbName = conf.dbName) {
    return this.client.db(dbName).collection(colName)
  }
  // 订阅事件
  once(event, cb) {
    this.emiter.once(event, cb)
  }
}

module.exports = new Mongodb(conf)
