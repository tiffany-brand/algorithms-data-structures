// write a function that takes a number
// and adds up all numbers from 0 to the given number

const recursiveRange = (num) => {
	// end condition
	if (num === 0) return 0;
	// recursive addition
	return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6));
console.log(recursiveRange(10));

// recursiveRange(6) // 21
// recursiveRange(10) // 55
