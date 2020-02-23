// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, curIndex = 0, retStr = '') {
  var index = 0;
  if (n === 1) return console.log("#");

  if (curIndex === n) {
    console.log(retStr);
    return steps(n - 1, 0, '');
  }
  var retStr = "#";
  for (let j = 0; j < curIndex; j++) {
    retStr += "#";
  }
  for (let j = 0; j < n - curIndex - 1; j++) {
    retStr += " ";
  }

  return steps(n, curIndex + 1, retStr);
}

// function steps(n) {
//     var index = 0;
//     if(n === 1)
//     return console.log('#');
    
//     for(var i = 0; i < n; i++){
//         let retStr = '#';
//         for(let j = 0; j < i; j ++){
//             retStr += '#';
//         } 
//         for(let j = 0; j < (n-i - 1); j ++){
//             retStr += ' ';
//         }
//         console.log(retStr);
//     }
// }

module.exports = steps;
