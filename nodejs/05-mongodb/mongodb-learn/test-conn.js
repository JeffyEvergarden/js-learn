const mongodb = require('./mongodb')

mongodb.once('connect', async () => {
  const col = mongodb.col('fruits')
  await col.deleteMany()
  console.log('删除成功')
  const data = new Array(10).fill().map((item, index) => {
    return {
      name: 'xxxx' + index,
      price: index,
      category: Math.random() > 0.5 ? '蔬菜' : '水果',
    }
  })
  let ret = await col.insertMany(data)
  if (ret.result.ok === 1) {
    console.log('插入成功')
  }
})
