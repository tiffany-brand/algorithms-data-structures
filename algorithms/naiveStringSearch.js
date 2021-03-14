const nsSearch = (long, short) => {
	let match = false;
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (long[i + j] !== short[j]) {
				match = false;
				break;
			} else {
				match = true;
			}
		}
		if (match === true) {
			count++;
			match = false;
		}
	}
	return count;
};

console.log(nsSearch('hiellohihelhellohijfkk', 'joe'));
