/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let arr = []
  preorder(root, arr)
  return arr
}

function preorder(root, args) {
  if (!root) {
    return
  }
  args.push(root.val)
  if (root.left) {
    preorder(root.left, args)
  }
  if (root.right) {
    preorder(root.right, args)
  }
}
