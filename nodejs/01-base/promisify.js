const { promisify } = require('util')

const fs = require('fs')

const readFile = promisify(fs.readFile)

(async ()=> {
  const data = await readFile('./jest.js')
  console.log('data', data instanceof Buffer, data.toString())
})()
