class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

let head = new Node(1)

class ListOp {
  constructor(node) {
    this.head = node || null
    this.length = node ? 1 : 0
  }
  getLast() {
    let p = this.head
    while (p && p.next !== null) {
      p = p.next
    }
    return p
  }
  insert(i) {
    let p = this.getLast()
    p.next = new Node(i)
  }
  console() {
    let p = this.head
    while (p !== null) {
      console.log(p.value)
      p = p.next
    }
  }
}

let listop = new ListOp(head)

listop.console()
listop.insert(10)
listop.console()
