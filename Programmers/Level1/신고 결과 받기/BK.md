```javascript
function solution(id_list, report, k) {
    const uniq_id_list = [...new Set(report)];
    
    const { reporterMap, reportedCountMap } = uniq_id_list.reduce((acc,val) => {
        const [reporter, reported] = val.split(' ');
        
        
        const reporterVal = acc['reporterMap'][reporter] || []
        acc['reporterMap'][reporter] = [...reporterVal, reported];
        
        const reportedVal = acc['reportedCountMap'][reported] || 0
        acc['reportedCountMap'][reported] = reportedVal + 1;
        
        return acc;
    }, { reporterMap: {}, reportedCountMap: {} });
    
    return id_list
        .map((id) => reporterMap[id] 
             ? reporterMap[id].filter(v => reportedCountMap[v] >= k).length
             : 0)
       
}
```
