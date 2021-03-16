// Multiple Pointers Example

// Implement a function called countUniqueValues that accepts a
// sorted array and counts the unique values in the array.
// There can be negative numbers in the array, but it's always sorted

// Goal: O(n) time complexity, O(1) space complexity

const countUniqueValues = (arr) => {
    // check for empty array
    if (arr.length === 0) return 0;
    // initialize a pointer for the first position
    let i = 0;
    // loop through the array starting with the second position and going until
    // the end of the array
    for (let j = 1; j < arr.length; j++) {
        // compare the pointer1 num and pointer2 num
        // if they are not the same
        if (arr[i] !== arr[j]) {
            // increment i
            i++;
            // set the number at position i to the one at position j
            arr[i] = arr[j];
        }
    }
    // i will end up at the index of the end of the unique numbers
    // so return the value of i plus 1 which gives the amount of unique numbers
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));