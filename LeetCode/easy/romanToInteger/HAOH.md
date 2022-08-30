```javascript
const mapSymbolToValue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let numberBefore = 0;
  let answer = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const before = mapSymbolToValue[s[i + 1]] || 0;
    const current = mapSymbolToValue[s[i]];
    const isMinus = current < before;

    answer += isMinus ? -current : current;
  }

  return answer;
};
```
