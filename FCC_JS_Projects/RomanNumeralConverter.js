console.log("Roman Numeral Converter")
//Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.
 /**************************************************************
 * JavaScript Algorithms and Data Structures Projects:         * 
 * Roman Numeral Converter, JJ 2018                            *
 * https://jsfiddle.net/johnny2136/8m6937xd/20/                *
 ***************************************************************/
function convertToRoman(num) {
   //Make 2 arrays.
  const decArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romArr = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  //Variable for solution.
  let rom = " ";
  //While loop inside a for to convert the Number to Roman number
  console.log("Number: " + num);
  for (let i = 0; i <= decArr.length; i++) {     
    while (num % decArr[i] < num) {
      //console.log(num);//Debugging 
      rom += romArr[i];       
      num -= decArr[i];
      //console.log(rom);//Debugging
      //console.log(num);//Debugging 
    };
  }; 
  console.log("converts to: " + rom);
  return rom;
};
//Unit tests:
convertToRoman(36);//should return "XXXVI"
convertToRoman(2); //should return "II".
convertToRoman(3); //should return "III".
convertToRoman(4); //should return "IV".
convertToRoman(5); //should return "V".
convertToRoman(9); //should return "IX".
convertToRoman(12); //should return "XII".
convertToRoman(16); //should return "XVI".
convertToRoman(29); //should return "XXIX".
convertToRoman(44); //should return "XLIV".
convertToRoman(45); //should return "XLV"
convertToRoman(68); //should return "LXVIII"
convertToRoman(83); //should return "LXXXIII"
convertToRoman(97); //should return "XCVII"
convertToRoman(99); //should return "XCIX"
convertToRoman(400); //should return "CD"
convertToRoman(500); //should return "D"
convertToRoman(501); //should return "DI"
convertToRoman(649); //should return "DCXLIX"
convertToRoman(798); //should return "DCCXCVIII"
convertToRoman(891); //should return "DCCCXCI"
convertToRoman(1000); //should return "M"
convertToRoman(1004); //should return "MIV"
convertToRoman(1006); //should return "MVI"
convertToRoman(1023); //should return "MXXIII"
convertToRoman(2014); //should return "MMXIV"
convertToRoman(3999); //should return "MMMCMXCIX"
