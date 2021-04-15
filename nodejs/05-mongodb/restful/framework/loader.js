const fs = require('fs')

const path = require('path')

const mongoose = require('mongoose')

function load(dir, cb) {
  const url = path.resolve(__dirname, dir)
  const files = fs.readdirSync(url)
  files.forEach((filename) => {
    filename = filename.replace('.js', '')
    const file = require('url')
  })
}
