const options = require('./webpack.config.js')
const Webpack = require('./lib/webpack')
console.log(options)

new Webpack(options).run()
