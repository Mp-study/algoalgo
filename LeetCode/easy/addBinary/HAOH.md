```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const largerOne = a.length > b.length ? a : b;

  const { answer, flag } = [...largerOne].reduce(
    ({ partialA, partialB, flag, answer }) => {
      const lastA = partialA.slice(-1);
      const lastB = partialB.slice(-1);
      const carry = lastA & lastB || lastB & flag || flag & lastA;

      return {
        answer: String(lastA ^ lastB ^ flag) + answer,
        partialA: partialA.slice(0, -1),
        partialB: partialB.slice(0, -1),
        flag: carry,
      };
    },
    {
      partialA: a,
      partialB: b,
      flag: 0,
      answer: "",
    }
  );

  return flag ? String(flag) + answer : answer;
};
```
