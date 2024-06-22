const numbers1 = [1,2,3,4,5];
const numbers2 = [6,7,8,9,10];

const mergedArray = numbers1.concat(numbers2);

console.log("with contact");
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const mergeArrayWithSpreadOperator = [...numbers1, ...numbers2];

console.log ("with spread opeator (...)")
console.log(mergeArrayWithSpreadOperator);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];