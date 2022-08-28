// let arr=[1,2,3,5,6,7,8,9,10,11,12,13,14,15];
// for (let i=1;i<arr.length;i++){
//   if(arr[i]>=3 && arr[i]<=7){
//     console.log(arr[i])
//   }

// }
// //slide 7//
// let word="nationality"
// console.log(word.substring(0,4));
// //substring exercise
// let micro = "Microverse";
// console.log(micro.substring(5,0));
// console.log(micro.substring(5));
// //lets do some buily=t in function // substring,inclundes
// let arr=['fred','nani','bolt','jesus'];
// let find = 'hype'
// arr.unshift('hype');
// console.log(arr.includes(find));
// let arr=[1,2,3,5,6,7,8,,9,10,13];
// let found= 13;
// if ( arr.includes(found)=== true){
//   console.log('found it');
// } else {
//   console.log("not found");
// }
// // this was exercise 
// //slide 13
// let num=[1,3,4,6,95,6,7,24,65,77];
// let arr=[];
// for (let i=0;i<num.length;i++)  {
//   if(num[i] >5){
//     arr.push(num[i])
//   }
// }
// console.log(arr);
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let newArr=[];
// for (let i=0;i<arr.length;i++){
//   if (arr[i]>3 && arr[i]<10){
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr);
// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// for (let i=arr.length-1;i>=0;i--){
//   console.log(arr[i])
//     for(let j=arr[i].length-1;j>=0;j--){
//       console.log(arr[i][j]);
//     }
// }
// function 
// function mult(a,b){
//   console.log(5*5)
// }
// mult()
// function hello(name){
//   console.log("hello",name);
// }
// hello("fred");
// function sum(arr){
// let output=[];
//   for (let i=0;i<arr.length;i++){
//     output.push(arr[i] *5) 
//     }
//   return output;
// }
// let result=sum([1,2,4,5,6,7])
// console.log(result); 
// // 
//   reverse array
// function reverse(array){
//   let output =[];
//   for (let i=array.length -1;i>=0;i--){
//     output.push(array[i])
//   }
//   return output;
// }
// let result= reverse([1,2,3,4,5,6,7,8,9]);
// console.log(result);
// changing array value according
// function binary(arr){
//   let output=[];
//   for(let i=0;i< arr.length;i++){
//     if(arr[i] === 1){
//       output.push("one");
//     }
//     if (arr[i] === 0){
//       output.push("zero");
//     }

//   }
//    return output;
// }
// let result=binary([1,2,0,1,0,1]);
// console.log(result);
// // exercise on array 
// let array=[1,2,1,2];
// function reverse(arr){
//   let output=[];
// for(let i=arr.length-1;i>=0;i--){
//   if(arr[i] === 4){
//     output.push("four");
//   }
//   if(arr[i]=== 3){
//     output.push("three");
//   }
//   if(arr[i]=== 2){
//     output.push("two");
//   }
//   if(arr[i]=== 1){
//     output.push("one");
//   }
// }
//   return output;
// }
// console.log(reverse(array));

// // // uncomment all
// // // progress on level 4
// // first exercise on level 4 
// function convertToF(celsius) {
//   let fahrenheit = (celsius * 9/5) + 32;
//   // Only change code below this line

//   // Only change code above this line
//   return fahrenheit;
// }

// Change the inputs below to test your code
// convertToF(40);
//
// reverse a string 
// function reverseString(str) {
//   let output="";
//   for(let i=str.length-1;i>=0;i--){
//   output+=str[i];
//   }

//   return output;
// }

//  let result =reverseString("amajyi");
//  console.log(result);
// factorize number
// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }

//  let result = factorialize(0);
// console.log(result);
//truncate string challenge//
// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);
//  where do i belong challenge on microverse 
// function getIndexToIns(arr, num) {
//   // sort and find right index
//   let index = arr
//     .sort((curr, next) => curr - next)
//     .findIndex(currNum => num <= currNum);
//   // Returns index or total length of arr
//   return index === -1 ? arr.length : index;
// }
// getIndexToIns([40, 60], 50);


// // freecode camp challenge ofJavaScript Algorithms and Data Structures - Record Collection 
// let recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop === "tracks") {
//     records[id][prop] ??= [];
//     records[id][prop].push(value);
//   } else {
//     records[id][prop] = value;
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");
// while loop sequence 
// Iterate with JavaScript While Loops
// Setup
// const myArray = [];
// let i=5;
// while(i>=0){
//   myArray.push(i);
//   i--;
// }
// console.log(myArray);
// // Iterate with JavaScript For Loops
// const myArray = [];
// for (let i=1;i<=5;i++){
// myArray.push(i)
// }
//  console.log(myArray);
// //Iterate Odd Numbers With a For Loop
// const myArray = [];
// for (let i=1;i<=9;i +=2){
//   myArray.push(i);
// }
// console.log(myArray)
// //
// const myArray = [];
// for( let i=9;i>=1;i-= 2){
//   myArray.push(i);
// }
// //Iterate Through an Array with a For Loop
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }


// chonk monkey // solution
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   let newArr = [];
//   let i = 0;

//   while (i < arr.length) {
//     newArr.push(arr.slice(i, i + size));
//     i += size;
//   }
//   return newArr;
// }
// chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Sum All Numbers in a Range
// const sumAll = arr => {
//   // Buckle up everything to one!
//   const startNum = arr[0];
//   const endNum = arr[1];

//   // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
//   // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
//   const numCount = Math.abs(startNum - endNum) + 1;

//   // Using Arithmetic Progression summing formula
//   const sum = ((startNum + endNum) * numCount) / 2;
//   return sum;
// };
// // Iterate with JavaScript Do...While Loops
// // Setup
// const myArray = [];
// let i = 10;

// // Only change code below this line
// do {
//  myArray.push(i);
//   i++;
// } while(i<10){
// }

// // Replace Loops using Recursion 
// function sum(arr, n) {
//   // Only change code below this line
// if (n<=0){
//   return 0;
// } else {
//   return sum(arr,n-1)+arr[n-1];
// }
// }
// // generate a whole number within range 
// // Example
// function ourFunction(ourMin, ourMax) {

//   return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }

// ourFunction(1, 9);

// // Only change code below this line.

// function randomRange(myMin, myMax) {

//   return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

// }

// // Change these values to test your function
// var myRandom = randomRange(5, 15);
// //  check two array then merge them to provide one array which is not in other array!
// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// // Use the Rest Parameter with Function Parameters
// //this is the answer!//
// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1,2,3));
// // 


// seek and destroy coding challenge//
// function destroyer(arr) {
//   const valsToRemove = Object.values(arguments).slice(1);
//   const filteredArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     let removeElement = false;
//     for (let j = 0; j < valsToRemove.length; j++) {
//       if (arr[i] === valsToRemove[j]) {
//         removeElement = true;
//       }
//     }
//     if (!removeElement) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }
//pig latin answer!! challenge//
// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }

// translatePigLatin("consonant");
// function pairElement(str) {
//   // Return each strand as an array of two elements, the original and the pair.
//   var paired = [];

//   // Function to check with strand to pair.
//   var search = function(char) {
//     switch (char) {
//       case "A":
//         paired.push(["A", "T"]);
//         break;
//       case "T":
//         paired.push(["T", "A"]);
//         break;
//       case "C":
//         paired.push(["C", "G"]);
//         break;
//       case "G":
//         paired.push(["G", "C"]);
//         break;
//     }
//   };

//   // Loops through the input and pair.
//   for (var i = 0; i < str.length; i++) {
//     search(str[i]);
//   }

//   return paired;
// }

// test here
// pairElement("GCG");

// level 5 challenge Convert HTML Entities
function convertHTML(str) {
  // Split by character to avoid problems.

  let temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");
// challenge of finding prime number and calculate thier sum //
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

// solving some challenge on hacker rank
// challenge on birthday cake challenges
// it was challenge about finding maximum and number of that maximum
function birthdayCakeCandles(ar) {
  let maxHeight = Math.max(...ar);
  let maxHeightCount = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == maxHeight) {
      maxHeightCount = maxHeightCount + 1;
    }
  }
  console.log(maxHeightCount);
  return maxHeightCount;
}
// breaking record//
function breakingRecords(scores) {
  let games = scores;
  let min = games[0];
  let max = games[0];

  let minRecord = 0;
  let maxRecord = 0;

  for (const score of games) {
    if (max < score) {
      max = score;
      maxRecord++;
    }
    else if (score < min) {
      min = score;
      minRecord++;
    }
  }

  return [maxRecord, minRecord];
}
// cat and mouse
function catAndMouse(x, y, z) {
  let catAPos = Math.abs(z - x);
  let catBPos = Math.abs(z - y);
  if (catAPos < catBPos) {
    return "Cat A";
  } else if (catBPos < catAPos) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}
// hudle race!1
let score = [0, 0]

for (let i = 0; i < a.length; i++)
  a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
return score



// this is the the level 6  //

function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

// hacker rank challenges  orange and apples !!
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const fLoc = function(treeLoc, arr2d) {
    return arr2d.map(fruitLoc => (treeLoc + fruitLoc));
  }
  const fRange = function(s, t, arr2d) {
    let a, b;
    a = 0; b = 0;
    arr2d.forEach((f, i) => {
      if (i === 0) { // apple count
        f.forEach(loc => s <= loc && loc <= t ? a++ : null);
      }
      if (i === 1) { // orange count
        f.forEach(loc => s <= loc && loc <= t ? b++ : null);
      }
    });
    return [a, b];
  }
  console.log(fRange(s, t, [fLoc(a, apples), fLoc(b, oranges)]).join('\n'));
}
