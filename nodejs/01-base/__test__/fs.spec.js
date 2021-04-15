test('readbook', () => {
  const fs = require('../fs')
  console.log(typeof read)
  let data = fs.read()
  expect(data).toBe('12313')
})

test('getFilename', () => {
  const src = new (require('../jest'))()
  const ret = src.getTestFileName('/abc/class.js')
  console.log(ret)
  expect(ret).toBe('/abc/__test__/class.spec.js')
})
