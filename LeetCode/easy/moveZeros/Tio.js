/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0; // 교환 대기 중인 0 index
    for (let i = 0; i < nums.length - 1; i++) {
        const next = nums[i + 1];
        const curr = nums[i];
        
        // curr
        if (curr === 0 && next !== 0) {
            swap(nums, pos, i + 1);
            pos = pos + 1;
        } 
        
        if (curr !== 0) {
            pos++;
        }
        
        
        
    }
    return nums;
};

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}
