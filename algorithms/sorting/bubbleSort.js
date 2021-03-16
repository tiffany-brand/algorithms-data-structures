// write a function that implements bubble Sort on an array of numbers

// function swaps two numbers in the array
const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
// es6 swapping using destructuring
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const bubbleSort = (arr) => {
    // variable to mark if a swap occurred
    let noSwaps;
    // start looping from the end of the array to the beginning using i
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        // inner loop  j goes from the beginning until i-1
        // because the end will become sorted, so we don't have to 
        // loop through those sorted numbers
        for (let j = 0; j <= i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            // if arr[j] is greater than arr[j+1], swap the values 
            if (arr[j] > arr[j + 1]) {
                swap2(arr, j, j + 1)
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    // return the sorted array
    return arr
}

let arr1 = [8, 1, 2, 3, 4, 5];

console.log(bubbleSort(arr1));