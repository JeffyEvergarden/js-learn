/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

var copyRandomList = function (head) {
  let p = head
  if(!head){
    return head
  }

  console.log(head)
  while (p) {
    let q = p.next
    let tmp = new Node(p.val, p.next)
    p.next = tmp
    p = q
  }

  p = head
  let a2 = new Node()
  let p2 = a2

  while (p) {
    let q = p.next
    q.random = p.random && p.random.next
    p = p.next.next
  }

  p = head
  while (p) {
    console.log(p.val)
    p = p.next
  }
  
  while (p) {
    let q = p.next.next
    // 整理p2
    p2.next = p.next
    p2 = p2.next
    p2.next = null
    p.next = q
    p = q
  }
  return a2.next
}

// @lc code=end
