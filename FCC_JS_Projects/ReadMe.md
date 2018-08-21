# Introduction to the JavaScript Algorithms and Data Structures Projects

Time to put my new JavaScript skills to work! These challenges will be similar to the algorithm scripting challenges but more difficult.(OH GREAT!) This will allow me to prove how much I have learned and get a certification.

## The JavaScript Algorithms and Data Structures Projects section consists of the following small JavaScript programs:

  - [X] Palindrome Checker
  - [X] Roman Numeral Converter
  - [X] Caesars Cipher
  - [ ] Telephone Number Validator
  - [ ] Cash Register
  
## My approch:

### Palindrome Checker:

* User story:

  As a user I want to: tidy up the string passed to my function, and checking whether the string is a palindrome.

  * Used `(/[^A-Z0-9]/ig)` for my RegEx filter and `.toLowerCase();` for all lowercase.
  * Used `.split('').reverse().join('')` for my reverse string
  * Used `return (removeChar === checkPalindrome);` for my test

### Roman Numeral Converter


* User story:

  As a user I want to: convert the given number into a roman numeral, and all roman numerals answers should be upper-case.
  
  * Used `const decArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];` and `const romArr = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];` for my two arrays.
  * Used
  ```javascript
  for (let i = 0; i <= decArr.length; i++) {
    while (num%decArr[i] < num) {     
      rom += romArr[i];
      num -= decArr[i];
    };    
  }; 
  ```
  as my conversion loops.
  
### Caesars Cipher


* User story:

  As a user I want to: enter a ROT13 encoded string as input to a function which will returns a decoded plain text string.
  * Other requierments are: 
    * All letters will be uppercase. 
    * Do not transform any non-alphabetic character (i.e. spaces, punctuation), but be sure to pass them on in the result.
  
  * Used the following code:
    ```javascript
    return (str + "").replace(/[A-Z]/gi, function (myStr) {/*Regex and .replace*/
      return String.fromCharCode(myStr.charCodeAt(0) + (myStr.toLowerCase() < "n" ? 13 : -13));/* used 	ternary operator*/
    });
    ```  
  
  
### Telephone Number Validator


* User story:

  As a user I want to: pass a number to a function that returns true if the passed string looks like a valid US phone number.
  For example: For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
  * Use the following
  
  
  
  
### Cash Register


* User story:

  As a user I want to:
  
  
  
