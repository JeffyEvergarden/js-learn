function throtte(fn, second) {
  let timer = null
  let content = this
  return (...args) => {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      clearTimeout(timer)
      fn.apply(content, args)
    }, second)
  }
}
