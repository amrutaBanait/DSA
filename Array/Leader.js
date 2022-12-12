// To find leader element in the array

// var array =[15,]

var arr= [15,16,3,2,6,1,4];
var n=7;
var max=arr[n-1];

for(var i=n-2 ; i>=0 ; i--){

    if(arr[i] > max){
      max=arr[i];
      console.log(arr[i]);
    }
     
  }
