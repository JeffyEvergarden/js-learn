class Heap {
  constructor(type) {
    this.type = !type ? '<' : '>' // 大顶堆 / 小顶堆
    this.list = []
    this.count = 0
  }

  push(val) {
    this.list.push(val)
    this.shiftUp(this.list.length - 1)
    console.log(`当前堆: ${this.list}`)
  }
  pop(val) {
    const last = this.list.length - 1
    // 交换2值
    this.change(0, last)
    this.list.pop()
    this.shiftDown(0)
    console.log(`当前堆: ${this.list}`)
  }
  change(i, j) {
    // 交换2值
    let tmp = this.list[i]
    this.list[i] = this.list[j]
    this.list[j] = tmp
  }
}
