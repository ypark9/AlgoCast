// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
    var lastStrLength = (2*n -1);
    var lIndex = Math.floor(lastStrLength/2);
    var rIndex = lIndex;
    var retStr = '';
    // for(var i = 0; i < lastStrLength; i++) {
    //     if(i < lIndex || i > rIndex) {
    //         retStr += ' ';
    //     }
    //     else {
    //         retStr += '#';
    //     }
    // }

    for(var i = 0; i < n; i++) {
        for(var j = 0; j < lastStrLength; j++) {
            if(j < lIndex || j > rIndex) {
                retStr += ' ';
            }
            else {
                retStr += '#';
            }
        }
        console.log(retStr);
        retStr = '';
        lIndex --;
        rIndex ++;
    }
}

module.exports = pyramid;
