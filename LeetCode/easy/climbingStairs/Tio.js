/**
 * @param {number} n
 * @return {number}
 */

const memo = {'1': 1, '2': 2};
var climbStairs = function(n) {
    if (n < 3) return n;
    if (memo[n] !== undefined) return memo[n];

    let first = 1;
    let second = 2;

    let count = 2;
    while (true) {
        if (count === n)
            break;
        
        const temp = second;
        second += first;
        first = temp;
        count++;
        memo[count] = second;
    }

    return second;
};


// O(2^N) O(N + M)
const memo = {};
var climbStairs = function(n) {
    return countWays(n);
};

function countWays(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    if (memo[n] !== undefined)
        return memo[n];

    const count = countWays(n - 1) + countWays(n - 2);
    
    memo[n] = count;
    return count;
}


