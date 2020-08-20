// function reverse(str) {
//   return str.split("").reverse().join("")
// }
// let str = reverse("str")
// console.log(str)

// function mergeArray(arr, arr1) {
//   let arr2 =  arr.concat(arr1).sort();
//   console.log(arr2);
//   return arr2.filter((item, pos) => arr2.indexOf(item) === pos);
// }

// let arr = [1,4,6,7]
// let arr1 = [2,3,8,9]

// mergeArray(arr, arr1);

// function palindrome(str) {
// 	return str.split('').reverse().join('') === str;
// }

// palindrome('abba');

// function reverseInt(number) {
// 	let numStr = String(number);
// 	return +numStr.split('').reverse().join('');
// }

// reverseInt(69);

// function findMaxChar(str) {
// 	let dic = {};
// 	let maxCount = 0;
// 	let maxChar;
// 	//need to check how to initialize the map in js
// 	for (char of str) {
// 		if (dic[char]) {
// 			dic[char]++;
// 		} else {
// 			dic[char] = 1;
// 		}
// 	}

// 	for (char in dic) {
// 		if (dic[char] > maxCount) {
// 			maxCount = dic[char];
// 			maxChar = char;
// 		}
// 	}
// 	console.log(`${maxChar}`);
// 	return { maxCount: maxCount, character: maxChar };
// }

// findMaxChar('aaddddddddddvvvvvvvvvvvvvvvvvvv');

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

// function anagrams(str1, str2) {
// 	let strM1 = str1.replace(/[^0-9a-zA-Z]/g, '');
// 	let strM2 = str2.replace(/[^0-9a-zA-Z]/g, '');
// 	console.log(strM1 + ' : ' + strM2);
// 	return str1.toUpperCase().split('').sort().join('') === str2.toUpperCase().split('').sort().join('');
// }

// anagrams('RAIL1 SAFETY!!', 'FAIRY1 !!TAles');

// function capitalization(str) {
// 	let retArr = [];
// 	for (word of str.split(' ')) {
// 		retArr.push(word[0].toUpperCase() + word.substring(1));
// 	}
// 	return retArr;
// }

// capitalization('i love you.');
// console.log("capitalization('i love you.')", capitalization('i love you.'));

// function steps(num) {
// 	let retArr = [];
// 	let starStr = '';
// 	for (let i = 0; i < num; i++) {
// 		starStr += '*';
// 	}
// 	for (let i = 0; i < num - 1; i++) {
// 		retArr.push(starStr.substring(0, i + 1));
// 	}
// 	retArr.push(starStr);
// 	return retArr;
// }

// steps(5);
// console.log('steps(5)', steps(5));

// function pyramid(num) {
// 	let largestStarNum = num * 2 - 1;
// 	let starStr = '*';
// 	let starObjsArry = [ { stars: '*', NeedToFill: largestStarNum - 1 } ];

// 	// we got first one above.
// 	for (let i = 2; i <= num; i++) {
//     starStr += '**';
// 		starObjsArry.push({ stars: starStr, NeedToFill: largestStarNum - (2 * i - 1) });
//   }
//   for(item of starObjsArry) {
//     for(let i = 0; i < item.NeedToFill/2; i ++) {
//       item.stars = " "+ item.stars;
//       item.stars = item.stars + " ";
//     }
//   }
// 	return starObjsArry;
// }

// let pyramidObj = pyramid(3).join("");
// console.log("pyramidObj", pyramidObj);

// function findVowels(str) {

//   //replace to find vowels . -replace regex
//   let refultStr = str.replace(/[^aiueo]/g, "");
//   return refultStr.length;
// }

// let count = findVowels("aaddncnskskdiooo");
// console.log("count", count);
//     matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// https://code.likeagirl.io/create-a-nxn-matrix-spiral-with-javascript-955ee18402f7
// function matrix(num) {
// 	// remember how to initialize NxN matrix.
// 	let mtrx = new Array(num).fill().map(() => new Array(num).fill(1));
// 	console.log(mtrx);

// 	let startRow = 0,
// 		endRow = num - 1,
// 		startCol = 0,
// 		endCol = num - 1;
// 	let count = 1;
// 	while (startRow <= endRow && startCol <= endCol) {
// 		for (let col = startCol; col <= endCol; col++) {
// 			mtrx[startRow][col] = count;
// 			count++;
// 		}
// 		startRow++;
// 		for (let row = startRow; row <= endRow; row++) {
// 			mtrx[row][endCol] = count;
// 			count++;
// 		}
// 		endCol--;
// 		for (let col = endCol; col >= startCol; col--) {
// 			mtrx[endRow][col] = count;
// 			count++;
// 		}
// 		endRow--;
// 		for (let row = endRow; row >= startRow; row--) {
// 			mtrx[row][startCol] = count;
// 			count++;
// 		}
// 		startCol++;
// 	}
// 	return mtrx;
// }

// console.log(matrix(3));
