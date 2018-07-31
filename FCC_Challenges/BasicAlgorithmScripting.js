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
