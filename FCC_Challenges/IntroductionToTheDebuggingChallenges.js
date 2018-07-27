//Debugging: Catch Misspelled Variable and Function Names: Day-2
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;// Canged ie to ei fixed missing s
console.log(`Net working capital is: ${netWorkingCapital}`);

//Debugging: Catch Unclosed Parentheses, Brackets, Braces and Quotes
// original buggy code...
//let myArray = [1, 2, 3; 
//let arraySum = myArray.reduce((previous, current =>  previous + current);
//console.log(`Sum of array values is: ${arraySum}`);
//https://medium.freecodecamp.org/reduce-f47a7da511a9 (resources used)
// my solution
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//Debugging: Catch Mixed Usage of Single and Double Quotes
// original buggy code...
//let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
//console.log(innerHtml);
// my solution
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//Debugging: Catch Use of Assignment Operator Instead of Equality Operator
// original buggy code...
let x = 7;
let y = 9;
let result = "to come";

//if(x = y) { // I fixed this for my solution
if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result);

//Debugging: Catch Missing Open and Closing Parenthesis After a Function Call
// original buggy code...
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result2 = getNine();//My solution, add "()"
console.log(result2);//Added result2 to avoid duplicates

//Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function
// original buggy code...
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 3;
//let power = raiseToPower(exp, base);// Switched Power and base for my solution
let power = raiseToPower(base, exp);
console.log(power);

//Debugging: Catch Off By One Errors When Using Indexing
// original buggy code...
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 0; i < len; i++) { //Changed i=1 to i=0 and <= to < for my solution
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}
countToFive();

//Debugging: Use Caution When Reinitializing Variables Inside a Loop
// original buggy code...

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    /**** //the offending code Loop****
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    */
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  for (let j = 0; j < n; j++) { //my solution move outside first loop
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

//Debugging: Prevent Infinite Loops with a Valid Terminal Condition
// original buggy code...
function myFunc() {
  //for (let i = 1; i != 4; i += 2) { //Infinit loop
    for (let i = 0; i <= 4; i += 2) { //My solution
    console.log("Still going!");
  }
}

//Debugging: Prevent Infinite Loops with a Valid Terminal Condition
// original buggy code...
