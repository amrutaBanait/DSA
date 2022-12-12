//ouput of given array in wave form


var arr=[2,1,3,4,20,30,6,5,8,50];
var n = arr.length;

for(var i=0; i<n-1;i++){
  //for even
  if(i%2==0){
if (arr[i]>arr[i+1]){
  //to swap
  var temp= arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
  }
  }
  else{
    if (arr[i]<arr[i+1]){
      var temp= arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
  }

  }
}

console.log(arr)





