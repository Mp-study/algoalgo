```js
function solution(n, lost, reserve) {
    var answer = 0;
    
    const nums = new Array(n).fill(1);
    for (const num of reserve) {
        nums[num - 1]++;
    } 
    for (const num of lost) {
        nums[num - 1]--;
    }
    for (const num of nums) {
        if (num > 0) answer++;
    }
    
    let prev = false;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num < 2) continue;
        
        if (i > 0 && nums[i - 1] === 0) {
            answer++;
            nums[i - 1] = 1;
        } else if (i + 1 < n && nums[i + 1] === 0) { 
            nums[i + 1] = 1;
            answer++;
        }
    }
    
    return answer;
}
```
