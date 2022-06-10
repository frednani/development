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
function reverseString(str) {
  let output="";
  for(let i=str.length-1;i>=0;i--){
  output+=str[i];
  }

  return output;
}

 let result =reverseString("amajyi");
 console.log(result);