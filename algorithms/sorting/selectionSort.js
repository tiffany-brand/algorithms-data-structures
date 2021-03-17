// implement selection sort

// swap function
// es6 swapping using destructuring
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const selSort = (arr) => {
    // create variable to store minimum
    let min;
    // loop through array 
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            // compare item to next item until smaller number is found
            if (arr[j] < arr[min]) {
                // if smaller, store index in minimum
                min = j;
            }
        }
        // if minimum is not inital value, swap
        if (min !== i) swap(arr, min, i);
    }
    // return the array
    return arr
}

let arr1 = [-1, 5, 88, 3, 1, 0, 9];

console.log(selSort(arr1));