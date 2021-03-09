// Create a function that takes a base and a power
// return the result of raising the base to a power
// don't worry about negative exponents
// use recursion

const power = (base, exponent) => {
	// anything to the 0 power is 1
	if (exponent === 0) return 1;
	// end case
	if (exponent === 1) return base;
	// recursive multiplication
	return base * power(base, exponent - 1);
};

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
console.log(power(3, 5));

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
