// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var retStrArr = [];
    let strArr = str.split(' ');
    for(var item of strArr){
        retStrArr.push((item[0].toUpperCase() + item.slice(1)));
    }

    return retStrArr.join(' ');
}

module.exports = capitalize;


// function capitalize(str) {
//     var capTrigger = 0;
//     var retStr = '';
//     for(var char of str)
//     {
//         if(char === ' ')
//         {
//             retStr += char;
//             capTrigger = 0;
//             continue;
//         }

//         if (capTrigger === 0){
//             retStr += char.toUpperCase();
//         }
//         else{
//             retStr += char;
//         }
//         capTrigger ++;
//     }
//     return retStr;
// }