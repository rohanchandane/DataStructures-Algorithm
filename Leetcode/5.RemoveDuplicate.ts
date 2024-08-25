function removeDuplicates(nums: number[]): number {
    
    nums.sort((a,b) => a - b); // because sort work differently in js/ts 

    let lastNumber = nums[0]; //1
    let counter = 1;

    for (let i = 1; i < nums.length; i++) { // 1,2
        if(lastNumber  !== nums[i]) { // 1 != 1 f// 1 != 2 t
            nums[counter] = nums[i]; // nums[1] = 2
            lastNumber = nums[i]; // 2
            counter++; //2 
        }
    }

    return counter;

};

removeDuplicates([1,1,2]);

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

removeDuplicates([-3,-1,0,0,0,3,3]);

// lastNum = -3
// counter 1

// i = 1
// -3 != -1 t
// nums[1] = -1
// lastNum = -1
// counter = 1

// lastNum = -1
// counter 1
// i = 2
// -3 != 0 t
// nums[2] = 0
