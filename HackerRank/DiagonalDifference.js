// Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    // Write your code here
    
	let d1 = 0;
	let d2 = 0;
    for (let i = 0; i < arr.length; i++) {
       
        d1 += arr[i][i];
		d2 += arr[i][(arr[i].length - i)-1];
		
    }

	let diff = d1 - d2;
    diff < 0? diff = diff * -1 : diff;
	
	return diff;
}

console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])); // 15


// [ [ 11, 2, 4, 2 ], [ 4, 5, 6, 2 ], [ 10, 8, -12, 2 ], [ 10, 8, -12, 2 ] ]