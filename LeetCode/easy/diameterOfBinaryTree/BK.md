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
var diameterOfBinaryTree = function(root) {
    let criterion = 2;

    return root.reduce((acc,val) => {
        if(val === 2) {
            acc+=1;  
        } else if(val === criterion * 2) {
            acc +=1;
            criterion = criterion * 2;
        }
        
        return acc;
    }, 1);
};
```