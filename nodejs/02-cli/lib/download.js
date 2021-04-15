const { promisify } = require('util')
module.exports.clone = async function (repo, desc) {
  const download = promisify(require('download-git-repo'))
  const ora = require('ora') // 显示loading
  const process = ora(`下载……${repo}`)
  try {
    process.start()
    await download(repo, desc)
    process.succeed()
  } catch (error) {
    console.log(error)
    process.succeed()
  }
}
