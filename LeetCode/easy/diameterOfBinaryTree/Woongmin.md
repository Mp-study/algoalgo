```javascript
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;

  function CheckTree(node) {
    if (!node) return 0;

    let left = CheckTree(node.left);
    let right = CheckTree(node.right);
    max = Math.max(max, left + right);

    return Math.max(left, right) + 1;
  }

  CheckTree(root);
  return max;
};
```
