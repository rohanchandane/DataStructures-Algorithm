function removeElement(nums: number[], val: number): number {
    
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[counter] = nums[i];
            counter++;
        } 
    }
    return counter; 
};


// test cases
removeElement([3,2,2,3], 3);

removeElement([0,1,2,2,3,0,4,2], 2);