### Tio
```js
function solution(id_list, report, k) {
    var answer = [];

    const memo = {};
    const whoReportWhom = {};
    for (const id of id_list) {
        whoReportWhom[id] = new Set();
        memo[id] = 0;
        answer.push(0);
    }

    for (const str of report) {
        const [who, whom] = str.split(' ');
        if (whoReportWhom[who].has(whom)) continue;
        whoReportWhom[who].add(whom);
        memo[whom]++;
    }

    for (const [whom, count] of Object.entries(memo)) {
        if (count < k) continue;
        for (let i = 0; i < id_list.length; i++) {
            const id = id_list[i];
            if (whoReportWhom[id].has(whom)) {
                answer[i]++;
            }   
        }
    }


    return answer;
}
```
