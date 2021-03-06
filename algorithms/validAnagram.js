// Given two string, write a function to determine if the
// second string is an anagram of the first.
// -- second word formed by rearranging the letters of another
// Assume no numbers or special characters, and all lowercase
// return true if they are anagrams

// From Colt Steele's Udemy Algorithms and Data Structures course
// Goal of exercise, to use frequency counter pattern to solve
// Doesn't use nested loops, so O(n) time complexity

validAnagram = (word1, word2) => {
    // check to see if they are the same length. If not, return false
    if (word1.length !== word2.length) return false;
    // create object for word1 and word2 to hold frequencies of each character
    let word1Freq = {};
    let word2Freq = {};
    // loop through first word and store char frequencies in object
    for (let char of word1) {
        word1Freq[char] = (word1Freq[char] || 0) + 1;
    }
    // loop through second word and store char frequencies in object
    for (let char of word2) {
        word2Freq[char] = (word2Freq[char] || 0) + 1;
    }
    // checking both objects
    console.log(word1Freq);
    console.log(word2Freq);
    // iterate through word1Freq object
    for (let key in word1Freq) {
        // check if key is in word2Freq object, if not return false
        if (!(key in word2Freq)) return false;
        // if key is in word2 object, check if frequency is equal, if not return false
        if (word1Freq[key] !== word2Freq[key]) return false;
    }

    // if makes it through end of the loop, it means all letters in word 1
    // are in word2 in same frequency, so they are anagrams - return true
    return true;
}

console.log(validAnagram("hello", "olhle"));
console.log(validAnagram("hi", "there"));
console.log(validAnagram("hello", "ohhle"));