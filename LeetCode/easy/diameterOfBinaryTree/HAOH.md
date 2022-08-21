```javascript
const getDiameter = (node) => {
  if (!node || (!node.left && !node.right)) return [0, 0]; // Base condition

  const [leftMax, diameterCanidateLeft] = getDiameter(node.right);
  const [rightMax, diameterCanidateRight] = getDiameter(node.left);

  const diameterCanidateCurrent =
    node.left && node.right ? leftMax + rightMax + 2 : 0;

  return [
    Math.max(rightMax, leftMax) + 1,
    Math.max(
      diameterCanidateCurrent,
      diameterCanidateLeft,
      diameterCanidateRight
    ),
  ];
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  const [answer, test] = getDiameter(root);
  return Math.max(answer, test);
};
```
