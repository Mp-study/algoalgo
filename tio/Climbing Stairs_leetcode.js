/**
 * @param {number} n
 * @return {number}
 */

// O(N * N!) O(N + M)
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


