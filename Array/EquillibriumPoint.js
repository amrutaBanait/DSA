//To find the equillibrium point in a array
var array=[-7,1,5,6,-4,3,0]

var sum = 0;
var rs = 0;
var ls=0;

for(let i=0; i<array.length; i++){
    sum =sum + array[i]
}
//console.log(sum)
rs = sum;

for(let i=0; i<array.length; i++){
    rs = rs - array[i];
    if(ls == rs){
        console.log(i);
    }else{
        ls = ls + array[i]
    }
}



// var arr=[-7,1,5,6,-4,3,0];


// if(ls==rs){
//   console.log(i);
//  // break;
// }else{
// ls= ls +arr[i];
// }
// }
