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


## 개선
- 같은 유저가 신고한 report는 1개로 처리 > 중복을 제거하고 시작한다
```js
// id가 신고한 유저가 k번 이상 신고되어 정지 됐을 때 
// id는 메일을 받는다
// 이 때 각 id가 받은 메일 갯수 리턴
function solution(id_list, report, k) {
    var answer = [];
    
    const whomReported = {};
    const whoReport = {};
    for (const id of id_list) {
        whomReported[id] = 0;
        whoReport[id] = 0;
    }
    
    report = [...new Set(report)].map(str => str.split(' '));
    for (const [who, whom] of report) {
        if (!whomReported[whom]) whomReported[whom] = 0;
        whomReported[whom]++;
    }
    
    for (const [who, whom] of report) {
        if (whomReported[whom] < k) continue;
        if (!whoReport[who]) whoReport[who] = 0;
        whoReport[who]++;
    }
    
    for (let i = 0; i < id_list.length; i++) {
        const id = id_list[i];
        answer[i] = whoReport[id] || 0;
    }
    
    return answer;
}
```
