```javascript
/**
 * @param {string} s
 * @return {number}
 */
const symbolMap = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
};

const symbolKeyIdxMap = Object.keys(symbolMap).reduce((acc, key, idx) => {
    acc[key] = idx;
    return acc;
} ,{});


var romanToInt = function(s) {    
 const splitted = s.split('');
 const nono = splitted.reduce((acc, val, idx) => {
     if(idx === 0) return acc;
     
     const curKeyIndex = symbolKeyIdxMap[val];
     const prevKeyIndex = symbolKeyIdxMap[splitted[idx - 1]];
     const weirdRom = prevKeyIndex < curKeyIndex;
     
     if(weirdRom) {
         acc.push(`${splitted[idx-1]}${val}`);
     }
     
     return acc;
 }, [])
 
 const nonoTotal = nono.reduce((acc, val) => {
     acc += symbolMap[val[1]] - symbolMap[val[0]];
     return acc;
 }, 0)
 
 const deleted = nono.reduce((acc, val) => {
     acc = acc.replace(val, '');
     return acc;
 }, s);
    
 const deletedTotal = deleted.split('').reduce((acc,val) => {
     acc += symbolMap[val]
     return acc;
 } ,0);
    
     
 return deletedTotal + nonoTotal   
};
```