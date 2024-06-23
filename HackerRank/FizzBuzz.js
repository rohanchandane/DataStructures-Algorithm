// Problem: https://www.hackerrank.com/challenges/fizzbuzz/problem

function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        let word = '';
        if (i % 3 === 0) {
            word = 'Fizz';
        } else if(i % 5 === 0) {
            word = 'Buzz';
        } else {
            word = i;
        }
        
        if (i % 3 === 0 && i % 5 === 0) {
            word = 'FizzBuzz';
        }
        
        console.log(word);
    }
}

fizzBuzz(15);