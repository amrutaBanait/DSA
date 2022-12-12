//Common element count in 2 array by sliding window

// var arr1=[2,3,4,7,8,10,11];
// var arr2=[1,2,4,7,8,10,11];
// var i=0;
// var j=0;
// var count =0;
// while(i <arr1.length && j<arr2.length){
//   while((i<arr1.length-1)&&(arr1[i]==arr1[i+1])){
// i++; 
//   }
//   while((j<arr2.length-1)&&(arr2[j]==arr2[j+1])){
//     j++;
// }
//  if(arr1[i]<arr2[j]){
//  i++;
//   //count++;
// }else if(arr1[i]>arr2[j]){
//   //count++;
//   j++;
// }else{
//  count++;
//   i++;
//   j++;
// }
// }

// console.log(count)


var arr1=[2,3,4,7,8,10];
var arr2=[1,2,4,6,7,8,10];

var i=0;
var j=0;
var count =0;
while(i<arr1.length && j<arr2.length){
  if(arr1[i]<arr2[j]){
    i++;
    
  }else if(arr1[i]>arr2[j]){
    j++;
   
  }else{
    count++;
    i++;
    j++;
  }
}
console.log(count);