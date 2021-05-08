module.exports = class webpack {
  constructor(options) {
    console.log(options)
    const { entry, output } = options
    this.entry = entry
    this.output = output
  }
  run() {
    this.parse(this.entry)
  }
  parse(entryFile) {
    console.log(entryFile)
  }
}
