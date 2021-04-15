#!/usr/bin/env node

// 定制命令

const program = require('commander')

const initFunc = require('../lib/init') // 初始化函数

program.version(require('../package.json').version)

program.command('init <name>').description('init project').action(initFunc)

// 解析
program.parse(process.argv)

// console.log('process.argv:')
// console.log(process.argv)
// console.log('params:')
// const params = program.parse(process.argv)
// console.log(params)
