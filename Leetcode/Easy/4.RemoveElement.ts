function removeElement(nums: number[], val: number): number {
    
    let counter = 0; // using new counter for existing array
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) { // 3 != 3: false, 2 != 3: true, 2 != 3: true, 3 != 3: false
            nums[counter] = nums[i]; // nums[0] = 2, nums[1] = 2
            counter++; // 1, 2
            console.log(counter);
        } 
    }
    return counter; // 2
};


// test cases
removeElement([3,2,2,3], 3);

removeElement([0,1,2,2,3,0,4,2], 2);