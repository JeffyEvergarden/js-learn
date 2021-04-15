const { promisify } = require('util')

const figlet = promisify(require('figlet')) // 大字

const clear = require('clear') // 清屏

const chalk = require('chalk') // 改色输出

const { clone } = require('./download.js')

const log = (content) => console.log(chalk.green(content))

const spawn = require('./install.js')

const open = require('open')

module.exports = async (name) => {
  clear()
  const data = await figlet('my-cli welcome')
  log('创建项目：' + name)
  log(data)
  const { clone } = require('./download.js')
  await clone('github:JeffyEvergarden/learn-ts', name)
  try {
    await spawn('npm', ['install', 'lodash'], { cwd: `./${name}` })
    log(chalk.green(`安装依赖完成`))
  } catch (err) {
    console.log(err)
    log(chalk.green(`安装依赖失败`))
  }
  // 打开浏览器
  log('打开浏览器：')
  open(`http://localhost:8080`)
  // await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}
