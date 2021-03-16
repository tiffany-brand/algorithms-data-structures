// implement linear search
// write a function that takes an array and a value
// loop through array and check each element to see if it's
// equal to the value
// return the index of the found value or -1 if not found

const linearSearch = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1;
};

const nums = [ 4, 6, 7, 2, 3, 44, 5, 6, 8, 10 ];

console.log(linearSearch(nums, 44));
console.log(linearSearch(nums, 99));
console.log(linearSearch([ 2 ], 1));
