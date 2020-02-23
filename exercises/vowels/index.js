// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    let lStr = str.toLowerCase();
    for(var n of lStr) {
        if(n === 'a' || n === 'i' || n === 'e' || n === 'o'  || n === 'u')
        count ++;
    }

    return count;
}

module.exports = vowels;
