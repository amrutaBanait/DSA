// Take out the max sum in window of given size ie 3
// [300+400+500 =1200]

//input
var arr=[100,200,300,400,500]
var k=3;
var n= 4;

var sum=0;
var i=0; //start
var max = 0;

for(var i =0;i<k;i++){
sum = sum +arr[i];
}
  if(sum>max){
  max = sum;
  }
  for(var i=k ; i<arr.length ; i++){
sum = sum + arr[i];
sum= sum- arr[i-k];
if(sum > max){
  max=sum;
}
  }

console.log(max);