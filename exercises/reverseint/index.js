// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var isNeg = false;
    if(parseInt(n) < 0){
        isNeg = true;
    }
    let num = parseInt(n.toString().split('').reverse().join(''));
    return isNeg? -1 * num : num;
}

module.exports = reverseInt;
