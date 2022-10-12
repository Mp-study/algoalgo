```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const countMap = nums.reduce((acc,val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    } ,{})
    
    return Object.entries(countMap).find(([key, value]) => value === 1)[0]
};
```