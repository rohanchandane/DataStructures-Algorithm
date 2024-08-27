/**
 Do not return anything, modify nums in-place instead.
 */
// bubble sort
// https://www.youtube.com/watch?v=Dv4qLJcxus8
// function sortColors(nums: number[]): void {
//     const n = nums.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - 1; j++) { //2nd loop running till n - 1 
//             if (nums[j] > nums[j + 1]) {
//                 [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];    
//             }    
//         }
//     }
// };

// insertion sort
// https://www.youtube.com/watch?v=8mJ-OhcfpYg
function sortColors(nums: number[]): void {
    // starts with index 1
    // if element in the right is higher element at index 1, move it to index 1 (right)

    const n = nums.length;
    for(let i = 1; i < n; i++) { // i:1
        let temp = nums[i]; // v:0
        let j = i - 1; // j:0
        while(j >= 0 && nums[j] > temp){ // 0 >= 0 && 2 > 0: t
            nums[j + 1] = nums[j]; // nums[1] = 2
            j--; // -1
        }
        nums[j + 1] = temp; // 0
    }
}