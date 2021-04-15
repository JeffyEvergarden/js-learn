const path = require('path')

module.exports = class testNow {
  getTestFileName(filename) {
    const dirName = path.dirname(filename)
    const baseName = path.basename(filename)
    const extName = path.extname(filename)
    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root: dirName+ '/__test__/',
      base: testName,
    })
  }
}
