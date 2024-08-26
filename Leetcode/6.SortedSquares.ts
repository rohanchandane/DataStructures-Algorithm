function sortedSquares(nums: number[]): number[] {
    
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
        nums[counter] = nums[i] * nums[i];
        counter++;
    }

    nums.sort((a,b) => a - b);

    return nums;
};


sortedSquares([-4,-1,0,3,10]);

sortedSquares([-7,-3,2,3,11]);
