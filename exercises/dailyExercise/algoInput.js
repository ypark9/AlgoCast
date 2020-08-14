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

// function chunck(arr, num) {
//   let retArr = [];
//   let arrlength = arr.length;
//   let indicator = 0;
//   for(;;) {
//     retArr.push(arr.splice(0, num));
//     indicator += num;
//     if(indicator >= arrlength) {
//       break;
//     }
//   }

//   return retArr;
// }

// let arr = [1,2,3,4,6,7,8];

// chunck(arr, 10);

function anagrams (str1, str2 ) {
  let strM1 = str1.replace(/[^0-9a-zA-Z]/, "");
  let strM2 =str2.replace(/[^0-9a-zA-Z]/, "");
  console.log(strM1 + " : " + strM2);
  return str1.toUpperCase().split("").sort().join("") === str2.toUpperCase().split("").sort().join("");
}

anagrams("RAIL1 SAFETY!!", "FAIRY1 !!TAles");