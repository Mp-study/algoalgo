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
 * @return {string}
 */
 var tree2str = function(root) {
    return traversePreOrder(root);
};

var traversePreOrder = (node) => {
    if (node == null) 
        return '';
    
    if (node.left === null && node.right === null) {
        return roo.val + '';
    }
    
    if (node.right === null) {
        return t.val + '(' + traversePreOrder(node.left) + ')';
    }
    
    return t.val+"("+traversePreOrder(node.left)+")("+traversePreOrder(node.right)+")";   
}
