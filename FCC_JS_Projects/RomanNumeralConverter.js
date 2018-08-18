console.log("Roman Numeral Converter")
//Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.
//https://repl.it/@JohnJohnson2/FCCProjects-RomanNumeralConverterjs
/***************************************************************
 * JavaScript Algorithms and Data Structures Projects:         * 
 * Roman Numeral Converter, JJ 2018                            *
 * https://jsfiddle.net/johnny2136/7b2qwepo/21/                *
 ***************************************************************/
function convertToRoman(num) {
   //Make 2 arrays.
  const decArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romArr = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  //Variable for solution.
  let rom = " ";
  //While loop inside a for to convert the Number to Roman number
  console.log(num);
  for (let i = 0; i <= decArr.length; i++) {
    while (num%decArr[i] < num) {     
      rom += romArr[i];
      num -= decArr[i];
    };    
  }; 
  console.log("converts to " + rom);
  return rom;
};
convertToRoman(36);
