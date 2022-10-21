/**
 * @param {string} s
 * @return {number}
 */
/*

'XXL' = 190
'V' = 5 
'XC' = 90
'IV' = 4
'IX' = 9
'XX' = 20
'IIX'= x
'CDXXXIICXLIII' = 432143

'IIII' = 4
'I' = 1
'II' = 2

3999 = 'MMMCMXCIX'


when to check?
I => V or X
X => L or C
C => D or M

V or X => check if I before
L or C => check if X before
D or M => check if C before

*/

const ROMAN_TO_NUMBER = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

var romanToInt = function(s) {
    let num = 0;
    let prev = -1;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const curr = s[i];
        
        if (curr === 'I' && prev === 'V') {
            num -= 1;
        } else if (curr === 'I' && prev === 'X') {
            num -= 1;
        } else if (curr === 'X' && prev === 'L') {
            num -= 10;
        } else if (curr === 'X' && prev === 'C') {
            num -= 10;
        } else if (curr === 'C' && prev === 'D') {
            num -= 100;
        } else if (curr === 'C' && prev === 'M') {
            num -= 100;
        } else {
            const parsed = ROMAN_TO_NUMBER[curr];
            num += parsed;
        }
        
        prev = curr;
    }
    return num;
};

// var romanToInt = function(s) {
//     let num = ROMAN_TO_NUMBER[s[s.length - 1]];
//     for (let i = s.length - 2; i >= 0; --i) {
//         const curr = s[i];
//         const prev = s[i + 1];
//         if (ROMAN_TO_NUMBER[curr] < ROMAN_TO_NUMBER[prev]) {
//             num -= ROMAN_TO_NUMBER[curr];
//         } else {
//             num += ROMAN_TO_NUMBER[curr];
//         }
//     }
    
//     return num;
// };


