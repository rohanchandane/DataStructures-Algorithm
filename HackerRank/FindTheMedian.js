// Problem: https://www.hackerrank.com/challenges/find-the-median/problem

function findMedian(arr) {

    arr.sort();
	
	if(arr.length % 2 !== 0) {
		const a = parseInt(arr.length / 2);
		console.log(arr[a]);
	}
}


findMedian([2, 1, 5, 7, 2, 0, 5]);