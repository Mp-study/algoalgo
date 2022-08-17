```js
function solution(sizes) {
    const maxs = [0, 0];
    for (const s of sizes) {
        if (s[0] < s[1]) 
            swap(s, 0, 1);
        maxs[0] = Math.max(s[0], maxs[0]);
        maxs[1] = Math.max(s[1], maxs[1]);
    }

    return maxs[0] * maxs[1];
}

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}
```
