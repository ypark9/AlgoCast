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
<<<<<<< HEAD
    if(stringA.length !== stringB.length)
        return false;
    var isAnagrams = true;
    var strArr1 = stringA.split('');
    for(char of stringB)
    {
        strArr1.findIndex(function(_char) {
            return _char === char;
        }, CharacterData)
    }

    return isAnagrams;
=======
    //push items into Map and find the item from another str from the map and remove the item from MAp
    return stringA.split('').reverse().join('') === stringB;
>>>>>>> 33e7e69791ce6d746ab0f6150e299ab2137e058a
}

module.exports = anagrams;
