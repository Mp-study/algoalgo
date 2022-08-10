```javascript
function solution(id_list, report, k) {
    const uniq_id_list = [...new Set(report)];
    
    const { reporterMap, reportedMap } = uniq_id_list.reduce((acc,val) => {
        const [reporter, reported] = val.split(' ');
        
        
        const reporterVal = acc['reporterMap'][reporter] || []
        acc['reporterMap'][reporter] = [...reporterVal, reported];
        
        const reportedVal = acc['reportedMap'][reported] || 0
        acc['reportedMap'][reported] = reportedVal + 1;
        
        return acc;
    }, { reporterMap: {}, reportedMap: {} });
    
    return id_list
        .map((id) => reporterMap[id] 
             ? reporterMap[id].filter(v => reportedMap[v] / k >= 1).length
             : 0)
       
}
```
