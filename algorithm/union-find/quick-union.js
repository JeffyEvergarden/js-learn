// 染色法  找的快，染的慢

class UnionSet {
  constructor(n) {
    this.boss = new Array(n)
    this.size = n
    for (let i = 0; i < n; i++) {
      this.boss[i] = i
    }
    console.log(this.boss)
  }
  find(x) {
    if (this.boss[x] === x) return x
    return this.find(this.boss[x])
  }

  // 把b 染成 a 的颜色
  merge(a, b) {
    let fa = this.find(a),
      fb = this.find(b)
    if (fa === fb) return
    this.boss[fa] = fb
    return
  }
}

const set = new UnionSet(10)

set.merge(1, 9)

set.merge(1, 2)

console.log(set.boss)


// 按质优化