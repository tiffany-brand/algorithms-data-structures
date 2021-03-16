// write a function that takes an array
// and returns a product of all numbers in array

const productOfArray = (arr) => {
	// end condition
	if (arr.length === 0) return 1;
	// recursive multiplication
	// multiple first number in arr by productOfArray of sliced rest of array
	return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([ 1, 2, 3 ]));
console.log(productOfArray([ 1, 2, 3, 10 ]));

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
