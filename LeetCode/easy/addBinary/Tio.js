/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// var addBinary = function(a, b) {
//     const sum = parseInt(a, 2) + parseInt(b, 2);
//     return sum.toString(2);

var addBinary = function(a, b) {
    const sum = BigInt('0b' + a) + BigInt('0b' + b);
    return sum.toString(2);
};


var addBinary = function(a, b) {
    a = [...a].reverse();
    b = [...b].reverse();

    let ans = [];
    let up = 0;
    let i = 0;
    while (i < a.length && i < b.length) {
        let s1 = a[i];
        let s2 = b[i];
        let c = '0';
        if (up === 1) {
            c = '1';
            up--;
        }

        if (s1 === '0' && s2 === '0') {
            c = c;
        } else if (s1 === '1' && s2 === '0') {
            if (c === '1') {
                c = '0';
                up++;
            } else {
                c = '1';
            }
        } else if (s1 === '0' && s2 === '1') {
            if (c === '1') {
                c = '0';
                up++;
            } else {
                c = '1';
            }
        } else if (s1 === '1' && s2 === '1') {
            c = c
            up += 1;
        }
        
        ans.unshift(c);
        i++;
    }
    let long = a;
    if (a.length < b.length)
        long = b;

    for (let j = i; j < long.length; ++j) {
        if (up === 0) {
            ans.unshift(long[j]);
            continue;
        }
        
        if (long[j] === '1') {
            ans.unshift('0');
        } else {
            ans.unshift('1');
            up -= 1;
        }
    }
    if (up === 1)
        ans.unshift('1');

    return ans.join('');
};

var addBinary = function(a, b) {
    let ans = '';
    
    let i = a.length - 1;
    let j = b.length - 1;
    
    let carry = 0;
    while (i >= 0 || j >= 0 || carry === 1) {
        if (i >= 0)
            carry += parseInt(a[i]);
        
        if (j >= 0)
            carry += parseInt(b[j]);
        
        ans = `${carry % 2}${ans}`;
        carry = Math.floor(carry / 2);
        
        i--;
        j--;
    }

    return ans;
};

console.log(addBinary('1010', '1011'), '10101');
