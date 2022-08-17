```javascript
function solution(n, lost, reserve) {
  let sortedLost = lost.sort((a, b) => a - b);
  let sortedReserve = reserve.sort((a, b) => a - b);

  const sparedStolen = sortedReserve.filter((v) => sortedLost.indexOf(v) > -1);

  sortedLost = sortedLost.filter((v) => sparedStolen.indexOf(v) < 0);
  sortedReserve = sortedReserve.filter((v) => sparedStolen.indexOf(v) < 0);

  let supplemented = [];
  sortedLost.forEach((v) => {
    sortedReserve.some((reservedNum, index) => {
      if (v === reservedNum - 1 || v === reservedNum + 1) {
        supplemented.push(v);
        return sortedReserve.splice(index, 1);
      }
    });
  });

  const lostCnt = sortedLost.length - supplemented.length;

  return n - lostCnt;
}
```
