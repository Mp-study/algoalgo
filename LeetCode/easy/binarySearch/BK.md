```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let low = 0;  
    let high = nums.length - 1;    
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = nums[mid];
        if (guess === target) {
            return mid;    
        } else if (guess > target) {
            high = mid - 1;    
        } else {
            low = mid + 1;    
        }  
    } 
    
    return -1;
};
```