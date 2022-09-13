```javascript
var tree2str = function(root) {
    if(!root) return '';
    const val = root.val;
    const left = tree2str(root.left);
    const right = tree2str(root.right);
    
    if (!left && !right) {
        return `${val}`;
    }
    
    if (!right) {
        return `${val}(${left})`;
    }
    
    return `${val}(${left})(${right})`
};
```