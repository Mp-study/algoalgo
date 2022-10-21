/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const length = Math.max(word1.length, word2.length);

  let words = "";
  for (let i = 0; i < length; i++) {
    words += word1.charAt(i) + word2.charAt(i);
  }

  return words;
};
