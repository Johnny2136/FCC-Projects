//Convert Celsius to Fahrenheit
//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32 ;// my solution
  return fahrenheit;
}
convertToF(30);

//Reverse a String
//Reverse the provided string.
function reverseString(str) {
  if (str === "") // my solution
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

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
factorialize(3);

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
    console.log(letterCount);
    return letterCount;    
} 
findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("Pride and Prejudice");

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
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

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
confirmEnding("Bastian", "n");

// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
var newStr = ""; 
  for(var i = 1; i <= num; i++){    
    newStr += str;      
  }
console.log(newStr);
return newStr;
}// repeat after me
repeatStringNumTimes("abc", 3);

//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return (str.length > num ? (str.substring(0, num) + '...'):str);
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
