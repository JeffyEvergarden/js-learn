// 染色法  找的快，染的慢

class UnionSet {
  constructor(n) {
    this.color = new Array(n)
    this.size = n
    for (let i = 0; i < n; i++) {
      this.color[i] = i
    }
    console.log(this.color)
  }
  find(x) {
    return color[x]
  }

  // 把b 染成 a 的颜色
  merge(a, b) {
    if (this.color[a] === this.color[b]) {
      return
    }
    let cb = this.color[b]
    for (let i = 0; i < this.size; i++) {
      if (this.color[i] === cb) {
        this.color[i] = this.color[a]
      }
    }
    console.log(`merge ${a} ${b}：`)
    console.log(this.color)
  }
}

const set = new UnionSet(10)

set.merge(1, 9)
