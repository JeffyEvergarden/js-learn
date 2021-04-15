// mysql.js
const mysql = require('mysql')
// 连接配置
const cfg = {
  host: '47.115.118.3',
  user: 'hui',
  password: '0113', // 修改为你的密码
  database: 'hui', // 请确保数据库存在
  connectTimeout: 60000
}
// 创建连接对象
const conn = mysql.createConnection(cfg)

// 连接
conn.connect((err) => {
  if (err) {
    throw err
  } else {
    console.log('连接成功！')
  }
})
