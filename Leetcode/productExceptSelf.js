function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    let left = 1;
    for (let i = 0; i < n; i++) {
        output[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;
}

// Test cases
console.log(productExceptSelf([1, 2, 4, 6]));      // [48, 24, 12, 8]
console.log(productExceptSelf([-1, 0, 1, 2, 3]));  // [0, -6, 0, 0, 0]