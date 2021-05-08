// 染色法  找的快，染的慢

class UnionSet {
  constructor(n) {
    this.boss = new Array(n + 1)
    this.arrSize = new Array(n + 1)
    this.size = n
    for (let i = 0; i <= n; i++) {
      this.boss[i] = i
      this.arrSize[i] = 1
    }
    console.log(this.boss)
  }
  find(x) {
    if (this.boss[x] === x) return x
    let result = this.find(this.boss[x])
    this.boss[x] = result // 路径压缩
    return result
  }

  // 把b 染成 a 的颜色
  merge(a, b) {
    let ra = this.find(a),
      rb = this.find(b)
    this.boss[ra] = rb
  }
}

const set = new UnionSet(10)

set.merge(1, 9)

set.merge(1, 2)

console.log(set.boss)

// 按质优化
