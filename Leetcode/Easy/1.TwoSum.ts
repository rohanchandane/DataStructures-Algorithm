// Brute force method

// function twoSum(nums: number[], target: number): number[] {
//     // take first number of an array
//     // perform add operation on rest of the numbers of array, one by one
//     // if it matches the target at any point, return indices

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }


// // Dry Run

// // i = 2
// // j = 7, 11, 15

// // i = 7
// // j = 11, 15

// // i = 11
// // j = 15
// };

// ---------------------------------------------------------------------------------

// [2,7,11,15] // target: 7
function twoSum(nums: number[], target: number): number[] {

    const numsWithIndices = nums.map((num, index) => [num, index]);
    // 0: (2) [2, 0]
    // 1: (2) [7, 1]
    // 2: (2) [11, 2]
    // 3: (2) [15, 3]

    numsWithIndices.sort((a,b) => a[0] - b[0]);
    // 0: (2) [2, 0]
    // 1: (2) [7, 1]
    // 2: (2) [11, 2]
    // 3: (2) [15, 3]
    // as its already sorted

    // applying 2 pointers - at the start, and at end
    let left = 0;
    let right = numsWithIndices.length - 1;

    while (left < right) { // 0 < 3: true, 1 < 2: true, 2 < 1: false
        console.log(left, right, numsWithIndices[left][0], numsWithIndices[right][0])
        let sum = numsWithIndices[left][0] + numsWithIndices[right][0]; // 2 + 15 = 17, 2 + 11 = 13, 2 + 7 = 9
        console.log(sum, target);
        if (sum === target) { // 17 === 9 : false, 13 === 9: false, 9 === 9: false
            return [numsWithIndices[left][1], numsWithIndices[right][1]]; // [0, 1]
        } else if (sum < target) { // 17 < 9: false, 13 < 9: false
            left++; 
        } else {
            right--; // 2, 1
        }
    }

    return [];
}