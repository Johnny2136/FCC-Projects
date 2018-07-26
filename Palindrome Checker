/***************************************************************
 * JavaScript Algorithms and Data Structures Projects:         * 
 * Palindrome Checker, JJ 2018                                 *
 * https://jsfiddle.net/johnny2136/8m6937xd/20/                *
 ***************************************************************/

function palindrome(str) {
  
  // Remove all non-alphanumeric characters
  var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  // Reverse removeChar for var checkPalindrom
  var checkPalindrome = removeChar.split('').reverse().join('');

  // Check for palindromes
  return (removeChar === checkPalindrome);
};

//Test
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye.."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
