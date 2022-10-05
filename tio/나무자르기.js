// const input = [];
// require("readline")
//     .createInterface(process.stdin, process.stdout)
//     .on("line", (line) => {
//         input.push(line);
//     })
//     .on("close", () => {
//         solution(input);
//         process.exit();
//     });

// const solution = ([condition, trees]) => {
//     const [T, M] = condition.split(' ').map(Number);
//     trees = trees.split(' ').map(Number);
    
//     // sum(x) >= M, sum(x)가 최소가 되는 최대 x를 구해라
//     let s = -1;
//     let e = Math.max(...trees);
    
//     while (s + 1 < e) {
//         const m = Math.floor((s + e) / 2);
//         let sum = 0;
//         for (const h of trees) {
//             sum += Math.max(0, h - m);
//         }
            
//         if (sum >= M) {
//             s = m;
//         } else {
//             e = m;
//         }

//     }
    
//     console.log(s);
// };

// const input = [];
// require("readline")
//     .createInterface(process.stdin, process.stdout)
//     .on("line", (line) => {
//         input.push(line);
//     })
//     .on("close", () => {
//         solution(input);
//         process.exit();
//     });

//     const solution = ([condition, trees]) => {
//         const [T, M] = condition.split(' ').map(Number);
//         trees = trees.split(' ').map(Number);
        
//         function f(sum, target) {
//             return sum >= target;
//         }
        
//         let s = 0;
//         let e = 1000000000;
//         let ans = -1;
        
//         while (s <= e) {
//             const m = Math.floor((s + e) / 2);

//             let sum = 0;
//             for (const h of trees) {
//                 sum += Math.max(0, h - m);
//             }
            
//             if (f(sum, M)) {
//                 if (ans === -1 || ans < m)
//                     ans = m;            
//                 s = m + 1;
//             } else {
//                 e = m - 1;                            
//             }
//         }
//         if (ans === - 1) 
//             return console.log(0);
        
//         console.log(ans);
//     };

const input = [];
require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        input.push(line);
    })
    .on("close", () => {
        solution(input);
        process.exit();
    });

    const solution = ([condition, trees]) => {
        const [T, M] = condition.split(' ').map(Number);
        trees = trees.split(' ').map(Number);
        
        function f(sum, target) {
            return sum >= target;
        }
        
        let s = -1;
        let e = 1000000000 + 1;
        let ans = -1;
        
        while (s + 1 < e) {
            const m = Math.floor((s + e) / 2);
    
            let sum = 0;
            for (const h of trees) {
                sum += Math.max(0, h - m);
            }
            
            if (sum >= M) {            
                s = m;
            } else {
                e = m;                            
            }
        }
        if (e > 1000000000) 
            return 1000000000
        
        console.log(s);
    };    
