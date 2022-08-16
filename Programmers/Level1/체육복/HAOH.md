```javascript
function solution(n, lost, reserve) {
  const arrCountCloth = new Array(n).fill(1);

  lost.forEach((studentIndex) => {
    arrCountCloth[studentIndex - 1] = arrCountCloth[studentIndex - 1] - 1;
  });

  reserve.forEach((studentIndex) => {
    arrCountCloth[studentIndex - 1] = arrCountCloth[studentIndex - 1] + 1;
  });

  const countHasCloth = arrCountCloth.reduce((acc, clothCount, currentIdx) => {
    if (clothCount >= 1) {
      // Has cloth
      return acc + 1;
    }

    const canBorrowFromFront =
      currentIdx > 0 && arrCountCloth[currentIdx - 1] === 2;
    if (canBorrowFromFront) {
      // borrow
      return acc + 1;
    }

    const canBorrowFromNext =
      currentIdx < n - 1 && arrCountCloth[currentIdx + 1] === 2;
    if (canBorrowFromNext) {
      // borrow
      arrCountCloth[currentIdx + 1] = 1;
      return acc + 1;
    }

    return acc;
  }, 0);

  return countHasCloth;
}
```
