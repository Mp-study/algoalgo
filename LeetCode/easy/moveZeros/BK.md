```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let zeros = []
    
    const calculated = nums.reduce((acc, value, idx) => {
        
    if (value === 0) {
        zeros.push(value);
    } else {
        acc.push(value);
    }
        
    
    if (idx === nums.length - 1) {
        acc = acc.concat(zeros);
    }
        
    return acc;
        
    }, []);
    
    
    calculated.forEach((value) => {
        nums.shift();
        nums.push(value);
    })
};
```