```javascript
function solution(nums) {
  const numberOfUniqueTypes = [...new Set(nums)].length;
  const numberOfChosenPokemon = nums.length / 2;
  const isNumberOfCaseBiggerThanChosenPokemon =
    numberOfUniqueTypes > numberOfChosenPokemon;

  return isNumberOfCaseBiggerThanChosenPokemon
    ? numberOfChosenPokemon
    : numberOfUniqueTypes;
}
```
