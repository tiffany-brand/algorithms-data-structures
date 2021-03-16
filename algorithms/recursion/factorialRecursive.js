// function takes a number and returns the factorial of the number
// factorial(4) should return 4 * 3 * 2 * 1
// factorial(0) is 1

const factorial = (num) => {
	// end condition
	if (num === 0) return 1;
	// recursive multiplication
	return num * factorial(num - 1);
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(0));

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
