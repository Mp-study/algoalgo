```js
function solution(sizes) {
  const width = [];
  const height = [];

  for (let i = 0; i < sizes.length; i++) {
  width[i] = Math.max(...sizes[i]);
  height[i] = Math.min(...sizes[i]);
  }

  return Math.max(...width) \* Math.max(...height);
}
```
