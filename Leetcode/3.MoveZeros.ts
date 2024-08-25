/**
 Do not return anything, modify nums in-place instead.
 */
// function moveZeroes(nums: number[]): void {
//     // sort array
//     // identify 0s and move them to back of array
//     // take them out in different array
//     // take rest of the array and put it in new array
//     // take array n put in origianl array
//     // append remaining 0s to original array

//     // nums.sort((a,b) => a - b);

//     let zeros:number[] = [];
//     let rest:number[] = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             zeros.push(nums[i]);
//         } else {
//             rest.push(nums[i]);
//         }
//     }

//     // nums = rest.concat(zeros);
//     console.log(rest, zeros);
//     // nums = [...rest, ...zeros];

//     for (let i = 0; i < rest.length; i++) {
//         nums[i] = rest[i];
//     }
//     let counter = 0;
//     for (let i = rest.length; i < nums.length; i++) {
//         nums[i] = zeros[counter];
//         counter++;
//     }
//     console.log(nums);
// };

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {

    // let counter = 0;
    let zeroCounter = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0) {
            nums[zeroCounter] = nums[i];
            zeroCounter++;
        }
    }

    for (let i = zeroCounter; i < nums.length; i++) {
        nums[i] = 0;
    }

    //sol.2
    // nums.sort((_, b) => (b === 0 ? -1 : 0));

    //sol:3
    // let counter = 0;
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] !== 0){
    //         [nums[counter], nums[i]] = [nums[i], nums[counter]]
    //         counter++;
    //     } 
    // }

    

    console.log(nums);
};