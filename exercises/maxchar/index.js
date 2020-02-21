// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var chars = {};
    for(let char of str)
    {
        if(chars[char] === undefined){
            chars[char] = 1;
        }
        else{
            chars[char] += 1;
        }
    }
    console.log(chars);
   var maxCharCount = 0;
   var maxChar = '';
    for(let attr in chars){
        if(chars[attr] > maxCharCount){
            maxChar = attr;
            console.log(attr);
            maxCharCount = chars[attr];
            console.log(maxCharCount);
            
        }
    }
    
//    var charsAttr = Object.keys(chars);
//    var maxCharCount = 0;
//    var maxChar = '';
//    for(char of charsAttr){
//         if( chars[char] > maxCharCount){
//             maxChar = char;
//             maxCharCount = chars[char];
//         }
//    }

   return maxChar;
}

module.exports = maxChar;
