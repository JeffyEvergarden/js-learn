const buf1 = Buffer.alloc(10)

console.log('buf1', buf1)

const buf2 = Buffer.from('a')

const buf3 = Buffer.from('ZHONG')

console.log(buf3)

const buf4 = Buffer.concat([buf2, buf3])

console.log(buf4.toString())