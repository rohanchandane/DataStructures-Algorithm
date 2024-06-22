// Problem: https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem

function miniMaxSum(arr) {
    
    arr.sort();
    
    let minValue = 0;
    for (let i = 0; i < arr.length - 1 ; i ++) {
        minValue = minValue + arr[i];
    }
    
    arr.reverse();
    
    let maxValue = 0;
    for (let i = 0; i < arr.length - 1 ; i ++) {
        maxValue = maxValue + arr[i];
    }
    
    console.log(minValue + " " + maxValue);
}

miniMaxSum([2,1,3,4,5]);