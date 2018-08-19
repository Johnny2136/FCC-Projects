# Introduction to the JavaScript Algorithms and Data Structures Projects

Time to put my new JavaScript skills to work! These challenges will be similar to the algorithm scripting challenges but more difficult.(OH GREAT!) This will allow me to prove how much I have learned and get a certification.

## The JavaScript Algorithms and Data Structures Projects section consists of the following small JavaScript programs:

  - [X] Palindrome Checker
  - [X] Roman Numeral Converter
  - [ ] Caesars Cipher
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

  As a user I want to:
  
  
  
### Telephone Number Validator


* User story:

  As a user I want to:
  
  
  
### Cash Register


* User story:

  As a user I want to:
  
  
  
