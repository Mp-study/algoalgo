```javascript
function solution(sizes) {
  const { maxWidth, maxHeight } = sizes.reduce(
    (acc, size) => {
      const [width, height] = size;

      // 무조건 width <= height 하게 변경해줌
      const [smaller, bigger] =
        width < height ? [width, height] : [height, width];

      return {
        maxWidth: Math.max(acc.maxWidth, smaller),
        maxHeight: Math.max(acc.maxHeight, bigger),
      };
    },
    { maxWidth: 0, maxHeight: 0 }
  );
  return maxWidth * maxHeight;
}
```
