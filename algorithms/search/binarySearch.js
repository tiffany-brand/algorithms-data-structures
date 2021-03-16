// implement binary search

const binarySearch = (arr, val) => {
	// point at beginning
	let b = 0;
	// point at end
	let e = arr.length - 1;
	// point at middle
	let m = Math.floor((b + e) / 2);

	// search while the middle isn't the answer and
	// beginning is less than the end
	while (arr[m] !== val && b <= e) {
		console.log(b, m, e);
		// check if m is greater than val
		if (arr[m] > val) {
			// if yes, move the end down
			e = m - 1;
		} else {
			// if no, make the beginning up
			b = m + 1;
		}
		m = Math.floor((b + e) / 2);
	}
	if (arr[m] === val) {
		return m;
	}
	return -1;
};

console.log(binarySearch([ 1, 2, 3, 4, 5, 6 ], 4));
console.log(binarySearch([ 1, 2, 3, 4, 5 ], 4));
console.log(binarySearch([ 1, 2, 3, 4, 5 ], 47));
console.log(binarySearch([ 11, 14, 22, 67, 98, 100, 101, 130, 999 ], 47));
console.log(binarySearch([ 11, 14, 22, 67, 98, 100, 101, 130, 999 ], 11));
console.log(binarySearch([ 11, 14, 22, 67, 98, 100, 101, 130, 999 ], 130));
