// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strArr = str.split("");
    console.log(strArr);

    strArr.reverse();

    let retStr = strArr.join("");
    return retStr; 
}

module.exports = reverse;
