function lonelyinteger(a) {
    // Write your code here
    let counts = {};
    for (let i = 0; i < a.length; i++) {
        counts[a[i]] = 1 + (counts[a[i]] || 0);
    }

    let lonelyInteger;
    for(let key in counts) {
        if(counts[key] === 1) {
            lonelyInteger = key;
        }
    }

    return lonelyInteger;
}


console.log(lonelyinteger([1,2,3,4,3,2,1]));