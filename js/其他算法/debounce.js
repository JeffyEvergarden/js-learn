function debounce(fn, second) {
  let timer = null
  let content = this
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(content, args)
    }, second)
  }
}

