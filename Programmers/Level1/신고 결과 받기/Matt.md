```javascript
function solution(id_list, report, k) {
  let reportResult = {};
  for (let i = 0; i < id_list.length; i++) {
    const key = id_list[i];
    reportResult[key] = new Set();
  }

  for (let i = 0; i < report.length; i++) {
    const [reportUser, targetUser] = report[i].split(" ");
    reportResult[reportUser] = reportResult[reportUser].add(targetUser);
  }

  let reportedUser = {};
  Object.values(reportResult).forEach((value) => {
    for (let user of value) {
      if (!reportedUser[user]) {
        reportedUser[user] = 1;
      } else {
        reportedUser[user] = reportedUser[user] + 1;
      }
    }
  });

  let violatedUsers = [];
  for (let user in reportedUser) {
    const isEqOrGtK = reportedUser[user] >= k;

    if (isEqOrGtK) {
      violatedUsers.push(user);
    }
  }

  let result = [];
  for (let user in reportResult) {
    let cnt = 0;
    const reportedUser = reportResult[user];
    violatedUsers.forEach((vUser) => {
      if (reportedUser.has(vUser)) {
        cnt++;
      }
    });

    result.push(cnt);
  }

  return result;
}
```
