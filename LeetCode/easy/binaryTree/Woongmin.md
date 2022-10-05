```javascript
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let result = binarySearch(start, end, nums, target);

  return result;
};

function binarySearch(start, end, nums, target) {
  let mid = 0;

  while (start <= end) {
    mid = parseInt((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return binarySearch(start, mid - 1, nums, target);
    } else {
      return binarySearch(mid + 1, end, nums, target);
    }
  }

  return -1;
}
```
