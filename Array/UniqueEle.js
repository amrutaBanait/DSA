// To print unique element in the array

var arr = [3,6,4,3,5,4,5]

var obj={};
for(var i=0;i<arr.length;i++){
  if(obj[arr[i]]===undefined){
    obj[arr[i]]=1;
  }else{
    obj[arr[i]]=obj[arr[i]]+1;
  }
}
for (key in obj){
  if(obj[key]==1){
    console.log((key))
  }
}