```javascript
function solution(nums) {
    const maxSelection = nums.length / 2;
    
    const elemSize = new Set(nums).size;
    
    return elemSize > maxSelection ? maxSelection : elemSize;
}
```