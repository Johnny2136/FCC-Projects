//Intermediate Algorithm Scripting: Sum All Numbers in a Range
console.log("Sum All Numbers in a Range");
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.
function sumAll(arr) {
 var sum = 0;
  if(arr[1]>arr[0]){
    for(var i = arr[0]; i <= arr[1]; i++){
      sum = sum + i;
    }
  } else {
    for(var ii = arr[0]; ii >= arr[1]; ii--){
      sum = sum + ii;
    }
  }
  return sum;
};
sumAll([1, 4]);//should return 10.
console.log(sumAll([4, 1])); //should return 10.
console.log(sumAll([5, 10])); //should return 45.
console.log(sumAll([10, 5])); //should return 45.
console.log(sumAll([10, 12])); //should return 33.
console.log("<----------------------next exercise------------------------->");
