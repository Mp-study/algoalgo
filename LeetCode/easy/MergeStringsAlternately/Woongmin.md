```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const splitWord1 = word1.split("");
  const splitWord2 = word2.split("");
  const length = splitWord1.length + splitWord2.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(splitWord1[i]);
    result.push(splitWord2[i]);
  }

  return result.join("");
};
```
