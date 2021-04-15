const fs = require('fs')

const rs = fs.createReadStream('../../public/1.jpg')

const ws = fs.createWriteStream('../../public/2.jpg')

rs.pipe(ws)
