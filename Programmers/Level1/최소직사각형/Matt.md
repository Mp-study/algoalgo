```javascript
const switchValue = (w, h) => (h > w ? [h, w] : [w, h]);
const getBiggestValue = (array) => Math.max(...array);

function solution(sizes) {
  let wSizes = [];
  let hSizes = [];

  sizes
    .map(([w, h]) => switchValue(w, h))
    .forEach((values) => {
      wSizes.push(values[0]);
      hSizes.push(values[1]);
    });

  return getBiggestValue(wSizes) * getBiggestValue(hSizes);
}
```
