// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
	// current fib number
	let result = 2;
	// previous two numbers
	let prev1 = 1;
	let prev2 = 1;

	// calculate fib numbers up to num
	const helper = (current) => {
		// end condition
		if (current === num) return;
		// fib number calculation
		result = prev1 + prev2;
		prev2 = prev1;
		prev1 = result;

		return helper(current + 1);
	};

	helper(2);
	return result;
}

console.log(fib(35));
