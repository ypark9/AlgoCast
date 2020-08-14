// function reverse(str) {
//   return str.split("").reverse().join("")
// }
// let str = reverse("str")
// console.log(str)

// function mergeArray(arr, arr1) {
//   let arr2 =  arr.concat(arr1).sort();
//   console.log(arr2);
//   return arr2.filter((item, pos) =>
//      arr2.indexOf(item) === pos);
// }

// let arr = [1,4,6,7]
// let arr1 = [2,3,8,9]

// mergeArray(arr, arr1);


function palindrome(str) {
  return str.split("").reverse().join("") === str
}

palindrome("abba")

function reverseInt(number) {
  let numStr = String(number)
  return +(numStr.split("").reverse().join(""))
}

reverseInt(69)


function findMaxChar(str) {
  let dic = {};
  let maxCount = 0;
  let maxChar;
  //need to check how to initialize the map in js
  for(char of str) {
    if(dic[char]){
      dic[char] ++;
    }
    else {
      dic[char] = 1;
    }
  }

  for ( char in dic) {
    if(dic[char] > maxCount) {
      maxCount = dic[char];
      maxChar = char;
    }
  }
  console.log(`${maxChar}`);
  return {maxCount : maxCount, character : maxChar}
}

findMaxChar("aaddddddddddvvvvvvvvvvvvvvvvvvv");
