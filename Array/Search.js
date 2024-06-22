const number = [1,2,3,4,5,6,7,8,9,10];
const searchItem = 7;

let found = false;
let foundIndex;
for(let i = 0; i < number.length; i++) {
    if (number[i] === searchItem) {
        found = true;
        foundIndex = i;
    }
}

if(found) {
    console.log(`Searched item ${searchItem} found at index: ${foundIndex}`);
} else {
    console.log(`Search item not found`);
}
