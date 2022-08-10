```javascript
function solution(id_list, report, k) {
  var answer = [];

  const uniqReports = [...new Set(report)];

  const reportedByWho = uniqReports.reduce((acc, singleReport) => {
    const [from, to] = singleReport.split(" ");

    if (!acc[to]) {
      acc[to] = [from];
    } else {
      acc[to].push(from);
    }

    return acc;
  }, {});

  const idToResultMap = Object.values(reportedByWho).reduce(
    (acc, reporters) => {
      if (reporters.length >= k) {
        reporters.forEach((reporter) => {
          if (!acc[reporter]) {
            acc[reporter] = 1;
          } else {
            acc[reporter] = acc[reporter] + 1;
          }
        });
      }
      return acc;
    },
    {}
  );

  return id_list.map((id) => idToResultMap[id] || 0);
}
```
