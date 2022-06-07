let arr=[1,2,3,5,6,7,8,9,10,11,12,13,14,15];
for (let i=1;i<arr.length;i++){
  if(arr[i]>=3 && arr[i]<=7){
    console.log(arr[i])
  }
  
}
slide 7//
let word="nationality"
console.log(word.substring(0,4));
//substring exercise
let micro = "Microverse";
console.log(micro.substring(5,0));
console.log(micro.substring(5));
//lets do some buily=t in function // substring,inclundes
let arr=['fred','nani','bolt','jesus'];
let find = 'hype'
arr.unshift('hype');
console.log(arr.includes(find));
let arr=[1,2,3,5,6,7,8,,9,10,13];
let found= 13;
if ( arr.includes(found)=== true){
  console.log('found it');
} else {
  console.log("not found");
}
// this was exercise 
//slide 13
let num=[1,3,4,6,95,6,7,24,65,77];
let arr=[];
for (let i=0;i<num.length;i++)  {
  if(num[i] >5){
    arr.push(num[i])
  }
}
console.log(arr);
let arr=[1,2,3,4,5,6,7,8,9,10];
let newArr=[];
for (let i=0;i<arr.length;i++){
  if (arr[i]>3 && arr[i]<10){
    newArr.push(arr[i])
  }
}
console.log(newArr);
let arr=[[1,2,3],[4,5,6],[7,8,9]];
for (let i=arr.length-1;i>=0;i--){
  console.log(arr[i])
    for(let j=arr[i].length-1;j>=0;j--){
      console.log(arr[i][j]);
    }
}
