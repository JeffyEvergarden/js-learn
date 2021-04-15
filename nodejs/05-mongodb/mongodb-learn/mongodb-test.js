const mongodb = require('./mongodb')

mongodb.once('connect', async () => {
  const col = mongodb.col('fruits')

  let data = await col.find().toArray()
  console.log(data)

  // 分页
  console.log('total', col.find().count())
  data = await col.find().skip(5).limit(5).toArray()
  console.log('分页', data)
})
