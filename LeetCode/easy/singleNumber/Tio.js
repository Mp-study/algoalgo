

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i - 1] === nums[i]) return nums[i];
    }


    return;
};

var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);

    // for (let i = 1; i < nums.length; ++i) {
    //     if (nums[i - 1] === nums[i]) return nums[i];
    // }

    // const map = {}
    // for (const n of nums) {
    //     if (map[n] === true) return n;
    //     if (map[n] === undefined)
    //         map[n] = true;
    // }

    const set = new Set();
    for (const n of nums) {
        if (set.has(n)) return n;
        set.add(n);
    }


    return;
};
