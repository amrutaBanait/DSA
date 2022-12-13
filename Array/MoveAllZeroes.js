//Given an array, move all zeroes to the end of the array

var array = [2,0,0,4,0,9,0,5,0,5]
var zeroes = [];
var others = [];
var result = [];

for(let i=0; i<array.length; i++){
    if(array[i] == 0){
       zeroes.push(array[i])
    }else{
        others.push(array[i])
    }
}
result = [...others, ...zeroes]
console.log(result.concat())