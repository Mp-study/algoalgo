
// https://leetcode.com/problems/binary-search/description/

var search = function(nums, target) {
    let s = -1;
    let e = nums.length;

    while (s + 1 < e) {
        const m = Math.floor((s + e) / 2);

        if (nums[m] >= target) {
            e = m;
        } else {
            s = m;
        }
    }

    if (nums[e] !== target) {
        return -1;
    }

    return e;

};

var search = function(nums, target) {
    let s = 0;
    let e = nums.length - 1;

    while (s < e) {
        const m = Math.floor((s + e) / 2);

        if (nums[m] >= target) {
            e = m;
        } else {
            s = m + 1;
        }

    }

    if (nums[s] !== target) {
        return -1;
    }

    return s;

};
