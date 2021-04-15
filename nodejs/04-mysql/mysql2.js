;(async () => {
  const mysql = require('mysql2/promise') // mysql2包下的promise
  const cfg = {
    host: '47.115.118.3',
    user: 'hui',
    password: '0113', // 修改为你的密码
    database: 'hui', // 请确保数据库存在
    connectTimeout: 60000,
  }
  // 创建连接对象
  const conn = await mysql.createConnection(cfg)
  let ret = await conn.execute(
    `CREATE TABLE IF NOT EXISTS test2 ( id INT NOT NULL AUTO_INCREMENT, message VARCHAR(45) NULL, PRIMARY KEY (id))`
  )
  console.log('create:', ret)
  ret = await conn.execute('INSERT INTO test2(message) VALUES("helloworld")')
  console.log('insert:', ret)
  const [row, fields] = await conn.execute('select * from test2')
  console.log('select:')
  console.log('row:', JSON.stringify(row))
  console.log('row:', row[0].id)
  console.log('field:', fields)
  conn.end()
})()
