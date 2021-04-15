;(async () => {
  const { MongoClient } = require('mongodb')

  const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  let ret
  ret = await client.connect()
  const db = client.db('test')
  const fruits = db.collection('fruits')

  // 新增
  // ret = await fruits.insertOne({
  //   name: '芒果',
  //   price: 20.1,
  // })

  // console.log('insert', JSON.stringify(ret))

  ret = await fruits.findOne({ name: '芒果' })
  console.log('findeOne', JSON.stringify(ret))

  // 更新
  ret = await fruits.updateOne(
    { name: '芒果' },
    {
      $set: {
        name: '香蕉',
      },
    }
  )
  console.log('update', JSON.stringify(ret))

  // 删除
  // ret = await fruits.deleteOne({ name: '香蕉' })
  // console.log('delete', JSON.stringify(ret))
  client.close()
})()
