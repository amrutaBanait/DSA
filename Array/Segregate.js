// Segregate positive and negative numbers

var arr=[-1,3,8,-4,5,-6,7,-20,30,40];
var n= arr.length;

for(var i=0;i<n-1;i++){
  for(var j=n-1;j>0;j--){
    while(1){
      while(arr[i]<0 && i<j){
        i++;
      }
      while(arr[j]>0 && i<j){
        j--
      }
      if(i<j){
         var temp= arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
      }else{
        break;
      }
    }
  }
}
console.log(arr);