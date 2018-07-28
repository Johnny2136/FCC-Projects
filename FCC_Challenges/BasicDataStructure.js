//se an Array to Store a Collection of Data
let yourArray = ['one', 2, "three", true, 6, ];//change this line
console.log(yourArray.length);

//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
console.log(myArray);
// change code below this line
myArray[1] = 42;
//change code above this line
console.log(myArray);

//Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  // change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // change code above this line
  return arr;
}
// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

//Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // change this line (This was tricky I was over thinking it)
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}
// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Remove Items Using splice()
function sumOfTen(arr) {
  // change code below this line
   arr.splice(1, 2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
