### Tio
```js
function solution(nums) {
    var answer = 0;
    const set = new Set(nums);
    const half = parseInt(nums.length / 2, 10);
    if (set.size > half) return half;
    else return set.size;
}
```
