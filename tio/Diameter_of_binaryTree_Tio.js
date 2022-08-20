// 543. Diameter of Binary Tree

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
    const diameter = new Diameter();
    search(root, diameter);
    return diameter.value;
};

class Diameter {
    constructor() {
        this.value = 0;
    }
}

function search(node, diameter) {
    if (node === null)
        return 0;
    
    const left = search(node.left, diameter);
    const right = search(node.right, diameter);

    diameter.value = Math.max(diameter.value, left + right);
    
    return Math.max(left, right) + 1;
}
