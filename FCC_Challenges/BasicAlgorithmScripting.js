//Convert Celsius to Fahrenheit
//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32 ;// my solution
  return fahrenheit;
}
console.log(convertToF(30));
console.log("--------------------------------------------------");

//Reverse a String
//Reverse the provided string.
function reverseString(str) {
  if (str === "") // my solution
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));
console.log("--------------------------------------------------");

//Factorialize a Number
//Return the factorial of the provided integer.
function factorialize(num) {
  var i=0;
  var fct=1;
  while ( i < num){
    i=i+1;
    fct = fct*i;
  }
  return fct;
}
console.log(factorialize(3));
console.log("--------------------------------------------------");

//Find the Longest Word in a String
//Return the length of the longest word in the provided sentence.
function findLongestWordLength(str) {
    var obj = str.split(' ');// Split the words up
    var letterCount = 0; //variable for number of letters
    for (var i = 0; i < obj.length; i++) { //loop through the split string
        if (letterCount < obj[i].length) { // this looks ugly I'm sure there is a better way
            letterCount = obj[i].length;
        }
    }
    //console.log(letterCount);
    return letterCount;    
} 
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("Pride and Prejudice"));
console.log("--------------------------------------------------");

//Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
  var myArr=[];// my solution
  for(var i=0; i < arr.length; i++){
     var n = Math.max.apply (null,arr[i]);// used hint in the explination    
     myArr.push(n);
  }
  return myArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log("--------------------------------------------------");

//Confirm the Ending
//The function is a whole Boolean operation. You need to return true if the first argument ends with the second argument. This means that for the problem script, it should return true for the confirmEnding('Bastian', 'n'); case.
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var sln = target.length;
  console.log(sln);//Debugging statment
  if(str.substr(-sln) === target){
    console.log(str.substr(-sln) + " = " + target);//Debugging statment
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Bastian", "n"));
console.log("--------------------------------------------------");

//Finders Keepers
//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
function findElement(arr, func) {
  var num;
  console.log(arr);// for Debugging
  //console.log(arr.find((num) => {return func(num)})); //for troublesooting.
  return arr.find((num) => {return func(num)});
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));//should return 2.
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)); //should return 8.
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0)); //should return undefined.
console.log("--------------------------------------------------");

//Boo who
//Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  return typeof bool == 'boolean';// What is the new fad diet for ghost developers? The Boolean.
}
console.log(booWho(null));
console.log(booWho(true)); //should return true.
console.log(booWho(false)); //should return true.
console.log(booWho([1, 2, 3])); //should return false.
console.log("--------------------------------------------------");

//Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
  var myArr = str.toLowerCase().split(" ");
  var result = myArr.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
titleCase("I'm a little tea pot");

//
