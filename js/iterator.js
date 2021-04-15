class Counter {
  constructor(num) {
    this.count = 1
    this.limit = num
  }
  next() {
    if (this.count <= this.limit) {
      return { value: this.count++, done: false }
    } else {
      return { done: true }
    }
  }
  // [Symbol.iterator]() {
  //   return this
  // }
  [Symbol.iterator]() {
    let count = 1
    let limit = this.limit
    return {
      next() {
        if (count <= limit) {
          // console.log(this)
          return { value: count++, done: false }
        } else {
          return { done: true }
        }
      },
      [Symbol.iterator]() {
        return this
      },
      return() {
        console.log('finish')
        return { done: true }
      },
    }
  }
}

let counter = new Counter(5)

let it = counter[Symbol.iterator]()

for (let i of it) {
  console.log(i)
  if (i > 3) {
    break
  }
}
for (let i of it) {
  console.log(i)
}
