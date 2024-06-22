// Problem: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem

function plusMinus(arr) {
    
    let positiveNumbers = [];
    let negativeNumbers = [];
    let zeros = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i]);
        } else if(arr[i] < 0) {
            negativeNumbers.push(arr[i]);
        } else {
            zeros.push(arr[i]);
        }
    }
    
    console.log((positiveNumbers.length/arr.length).toFixed(6));
    console.log((negativeNumbers.length/arr.length).toFixed(6));
    console.log((zeros.length/arr.length).toFixed(6));
}


plusMinus([-4, 3, -9, 0, 4, 1]);

// Expected output 
// 0.500000
// 0.333333
// 0.166667