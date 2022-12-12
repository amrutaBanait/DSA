// Two sorted array
var arr1=[0,1,3,5,7,9];
var arr2=[2,4,8,1,11,16];
var s1=arr1.length;
var s2=arr2.length;

var i=0;
var j=0;
var k=0;
var res=[];

while(i<s1 && j<s2){
  if(arr1[i] < arr2[j]){
    res[k] = arr1[i];
    i++;
    k++;
  }else{
    res[k]=arr2[j];
    j++;
    k++;
  }
}
while(i<s1){
  res[k++] = arr1[i++];
}
while(j<s2){
  res[k++]=arr2[j++];
}
console.log(res);