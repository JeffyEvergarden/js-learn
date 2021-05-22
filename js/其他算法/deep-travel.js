class Node {
  constructor(val, children) {
    this.val = val
    this.children = children ? children : []
  }
}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)
let f = new Node(6)
let g = new Node(7)

a.children = [b, c]

b.children = [d, e]

e.children = [f]

c.children = [g]



function deepTraversal(node) {
  let nodes = []
  if (node != null) {
    nodes.push[node]
    let childrens = node.children || []
    for (let i = 0; i < childrens.length; i++) {
      const childArr = deepTraversal(childrens[i])
      nodes = nodes.concat(childArr)
    }
  }
  return nodes
}
