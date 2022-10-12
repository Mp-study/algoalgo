```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) return n;

  let prevCount = 1;
  let nextCount = 2;

  for (let i = 2; i < n; i++) {
    const temp = prevCount;
    prevCount = nextCount;
    nextCount = nextCount + temp;
  }

  return nextCount;
};
```
