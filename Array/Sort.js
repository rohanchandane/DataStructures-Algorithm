const numbers = [3,1,4,5,2];

numbers.sort();

console.log("Accending:"); // [ 1, 2, 3, 4, 5 ]
console.log(numbers); 

// numbers.reverse();

// console.log("Deccending:");
// console.log(numbers);

numbers.sort( (a,b) => {
    return b - a
});

console.log("Deccending:");
console.log(numbers); // [ 5, 4, 3, 2, 1 ]