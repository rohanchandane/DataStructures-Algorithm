/**
 Do not return anything, modify nums in-place instead.
 */
//  function rotate(nums: number[], k: number): void {
//     for (let i = 0; i < k; i ++) { // loop to shift 

//         for (let j = nums.length -1 ; j > 0; j--) { // 7
//             [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]; // 6, 5
//         }

//     }
// }

// Sol:
// loop till k times
// shift one element per loop to the right
// one of the for loop should be optimised , can do k to log k, just for ref


// best optimal version
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n; // keeping k to be within the array's length
    // k = 3 % 2; 1
    // k = 2 % 1; 1
    // k = 1 % 1; 0

    if (k === 0) return; // k is 0, don't rotate

    const newNums = new Array(n);

    for (let i = 0; i < n; i++) {
        const newIndex = (i + k) % n;
        newNums[newIndex] = nums[i];
    }

    // this is because nums = newNums doesn't work
    for (let i = 0; i < n; i++) {
        nums[i] = newNums[i];
    }
}
