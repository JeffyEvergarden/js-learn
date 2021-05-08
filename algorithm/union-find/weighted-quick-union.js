// 染色法  找的快，染的慢

class UnionSet {
  constructor(n) {
    this.boss = new Array(n)
    this.arrSize = new Array(n)
    this.size = n
    for (let i = 0; i < n; i++) {
      this.boss[i] = i
      this.arrSize[i] = 1
    }
    console.log(this.boss)
  }
  find(x) {
    if (this.boss[x] === x) return x
    return this.find(this.boss[x])
  }

  // 把b 染成 a 的颜色
  merge(a, b) {
    let ra = this.find(a),
      rb = this.find(b)
    if (ra === rb) return

    if (size[ra] < size[rb]) {
      this.boss[ra] = rb
      this.size[rb] += size[ra]
    } else {
      this.boss[rb] = ra
      size[ra] += size[rb]
    }
    return
  }
}

const set = new UnionSet(10)

set.merge(1, 9)

set.merge(1, 2)

console.log(set.boss)

// 按质优化
