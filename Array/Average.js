// Given an array of numbers find the average of all the even numbers

var numbers = [ 12, 9, 23, 45, 20, 34];
var sum = 0;
var count = 0;
var evens = [];

for(var i =0 ; i< numbers.length ;i++){

  if(numbers[i] % 2 == 0){

    sum=sum + numbers[i];

    count++;

    evens.push(numbers[i]);

  }
}

console.log("Average -" + (sum/count));

//console.log(evens);