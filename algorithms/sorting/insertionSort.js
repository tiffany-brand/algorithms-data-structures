// implement insertion sort

// swap function
// es6 swapping using destructuring
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const insSort = (arr) => {
    // loop through array, starting with second item
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1
        // compare with items in left "sorted" part of array
        while (j >= 0 && arr[j] > current) {
            console.log(arr)
            // move up the compared number
            arr[j + 1] = arr[j]
            j--;
        }
        // loop stops at right spot
        // insert current value into the index where the loop left off
        arr[j + 1] = current;

    }
    return arr;
}

let arr1 = [-1, 5, 88, 3, 1, 0, 9];

console.log(insSort(arr1));