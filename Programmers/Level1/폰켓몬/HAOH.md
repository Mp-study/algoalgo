```javascript
function solution(nums) {
  const variety = [...new Set(nums)];

  return Math.min(nums.length / 2, variety.length);
}
```
