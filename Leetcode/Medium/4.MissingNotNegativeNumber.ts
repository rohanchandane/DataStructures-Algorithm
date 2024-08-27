function findSmallestInteger(nums: number[], value: number): number {
    // try to achieve until you can't find min +ve MEX
    // loop till that time
    
    let arrayUpdatable = false;
    // let tempArray = [];
    for (let i = 0; i < nums.length; i++) {

        // nums[i] , index tak ye number repeat hua hai kya


        if (nums[i] < 0) {
            nums[i] = nums[i] + value;
            arrayUpdatable = true;
        // } else if (tempArray.includes(nums[i])) {
        //     nums[i] = nums[i] + value;
        //     arrayUpdatable = true;
        } else if (nums[i] > 0 && nums[i] >= value) {
            nums[i] = nums[i] - value;
            arrayUpdatable = true;
        } 
        
        // tempArray[i] = nums[i]; // 3,0,8,
        // console.log(tempArray);
    }

    if (arrayUpdatable === true) {
        findSmallestInteger(nums, value);
    }
    
    nums.sort((a,b) => a - b);

    let mex = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums.includes(i));
        const val = nums.includes(i);
        if (!val) {
            mex = i;
            break;
        } 
    }

    return mex;

};

// Dry run
        // [1,-10,7,13,6,8], true
        // [ 1, -5, 2, 8, 1, 3 ] first run, arrayUpdatable = true
        // [ 1, 0, 2, 3, 1, 3 ] 2nd run, arrayUpdatable = true
        // [ 1, 0, 2, 3, 1, 3 ] 3rd run, arrayUpdatable = false 



        // run another loop to do that, target value = 0
        // check with add or sub of 'value' from all the element, do I get 0 (target)
        // keep sorting array in the loop, and find what value I need to achieve next? if it's 1 or 2 or 3.. find next target value, update
        // when I get 0 (target), stop there
        
        // if negative number then add
        // if positive and greater than value then sub
        // until no number can be changed
