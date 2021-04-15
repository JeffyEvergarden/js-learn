/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function (head, x) {
  let r1 = new ListNode()
  let r2 = new ListNode()
  let p1 = r1
  let p2 = r2
  let p = head
  while (!p) {
    q = p.next
    if (p.val < x.val) {
      p.next = p1.next
      p1.next = p
      p1 = p
    } else {
      p.next = p2.next
      p2.next = p
      p2 = p
    }
    p = q
  }
  p1.next = r2.next
  return r1.next
}
// @lc code=end
