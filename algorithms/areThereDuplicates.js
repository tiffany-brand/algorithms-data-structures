// Implement a function which accepts a variable number of arguments
// and check whether there are any duplicates among the arguments

const areThereDuplicates = (...args) => {
    // create object to hold frequency of arguments
    let argFreq = {};

    // used forEach the first time, but can't return out of a forEach
    // so has to go through all the args even if duplicate is found

    // let result = false;
    // loop through args and tally frequency
    // args.forEach((arg) => {
    //     console.log(arg);
    //     console.log(argFreq);
    //     console.log(argFreq[arg]);
    //     if (argFreq[arg] === 1) {
    //         console.log("in true")
    //         // if frequency exists, then there is a duplicate - set result to true
    //         result = true;
    //     } else {
    //         argFreq[arg] = 1;
    //     }
    // });
    // loop through args and tally frequency
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (argFreq[arg] === 1) {
            // if frequency exists, then there is a duplicate - return true
            return true;
        } else {
            argFreq[arg] = 1;
        }
    }

    // otherwise return false
    return false;
}
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates('cat', 'dog', 'cat', 'mouse', 'fish'));
console.log(areThereDuplicates('cat', 'dog', 'mouse', 'fish'));