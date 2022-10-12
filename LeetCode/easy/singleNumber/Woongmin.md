```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  const set = new Set();
  nums.forEach((item) => {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  });

  return [...set][0];
};
```
