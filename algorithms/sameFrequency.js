// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Time complexity goal: O(n)

// takes a positive integer and returns an object with the frequency of digits
const numFreq = (num) => {
    // create object to hold result
    let result = {};
    // convert positive integer to a string
    const strNum = num.toString();
    // loop through the string and count the characters
    for (let char of strNum) {
        result[char] ? result[char]++ : result[char] = 1;
    }
    // return an object with the frequency of digits
    return result
}

const sameFrequency = (num1, num2) => {
    // create an object for each frequency using the numFreq function
    let num1Freq = numFreq(num1);
    let num2Freq = numFreq(num2);
    console.log(num1Freq);
    console.log(num2Freq);
    // loop through one object and compare the frequencies of each digit with the other
    for (let key in num1Freq) {
        // return false if not equal
        if (num1Freq[key] !== num2Freq[key]) return false;
    }
    // return true if all are equal
    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

