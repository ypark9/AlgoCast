// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //push items into Map and find the item from another str from the map and remove the item from MAp
    var charObj = {};
    for(let char of stringA){
       if(charObj[char] != undefined) {
           charObj[char] ++;
       }
       else{
        charObj[char] = 1
       }
    }
    console.log(charObj);
    
    var isAnagrams = true;
    for(let char of stringB){
        if(charObj[char] !== undefined) {
            charObj[char] --;
            if(charObj[char] === 0){
                delete charObj.char;
            }
        }
        else{ 
            isAnagrams = false;
            break;
        }
     }
     console.log(charObj);
     
     if(isAnagrams){
        for(let att in charObj){
            if(charObj[att] > 0){
                isAnagrams = false;
            }
         }
     }
     return isAnagrams;
}

module.exports = anagrams;
