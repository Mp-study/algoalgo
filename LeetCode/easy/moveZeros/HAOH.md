```javascript
/**
                   firstZero.   num    index
[0, 1, 0, 3, 12]   0.           0.     0
[0, 1, 0, 3, 12]   0.           1.     0 => nums[firstZero] = num
*/
var moveZeroes = function (nums) {
  nums.reduce((numOfNonZerosBefore, num, index) => {
    if (num === 0) return numOfNonZerosBefore;

    nums[numOfNonZerosBefore] = num;

    if (numOfNonZerosBefore !== index) {
      nums[index] = 0;
    }

    return numOfNonZerosBefore + 1;
  }, 0);
  return nums;
};
```
