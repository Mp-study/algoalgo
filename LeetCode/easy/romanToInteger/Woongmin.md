```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const splitS = s.split("");
  let result = 0;

  for (let i = 0; i < splitS.length; i++) {
    if (symbol[splitS[i]] < symbol[splitS[i + 1]]) {
      result -= symbol[splitS[i]];
    } else {
      result += symbol[splitS[i]];
    }
  }

  return result;
};
```
