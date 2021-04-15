// 安装依赖

const spawn = async (...args) => {
  const { spawn } = require('child_process')

  return new Promise((resolve) => {
    args[0] = process.platform === 'win32' ? 'npm.cmd' : args[0]
    const proc = spawn(...args) // 得到命令流
    proc.stdout.pipe(process.stdout) // 导到控制台输出流
    proc.stderr.pipe(process.stderr) // 导到错误流
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = spawn
