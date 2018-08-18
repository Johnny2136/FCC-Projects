//Intermediate Algorithm Scripting: Sum All Numbers in a Range
console.log("Sum All Numbers in a Range");
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.
function sumAll(arr) {
 var sum = 0;
  if(arr[1]>arr[0]){
    for(var i = arr[0]; i <= arr[1]; i++){
      sum = sum + i;
    }
  } else {
    for(var ii = arr[0]; ii >= arr[1]; ii--){
      sum = sum + ii;
    }
  }
  return sum;
};
sumAll([1, 4]);//should return 10.
console.log(sumAll([4, 1])); //should return 10.
console.log(sumAll([5, 10])); //should return 45.
console.log(sumAll([10, 5])); //should return 45.
console.log(sumAll([10, 12])); //should return 33.
console.log("<----------------------next exercise------------------------->");

console.log("Diff Two Arrays");
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //should return ["pink wool"].

console.log("<----------------------next exercise------------------------->");

console.log("Seek and Destroy");
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. Note: You have to use the arguments object.
function destroyer(arr, a1, a2) {
  // Remove all the values
  console.log("Initial Array -->  " + arguments[0]);//Array argument 0  
  var args = Array.from(arguments).slice(1);
  console.log("Filter argument -->  " + (args = Array.from(arguments).slice(1)));//eval arguments
    return arr.filter(function(val) {
      return !args.includes(val);
    });
  return arr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //should return [1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); //should return [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //should return [1].
console.log(destroyer([2, 3, 2, 3], 2, 3)); //should return [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); //should return ["hamburger"].
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); //should return [12,92,65].
console.log("<----------------------next exercise------------------------->");

console.log("Wherefore art thou")
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
function whatIsInAName(collection, source) {
  // What's in a name?
  let srcKeys = Object.keys(source);
  let value;
  let filtered = collection.filter((x) => {
    for(let y = 0; y < srcKeys.length; y++){
      if(x.hasOwnProperty(srcKeys[y]) && x[srcKeys[y]] == source[srcKeys[y]]){
        value = true;
      } else {
        return false;  // if false stop looping right here and move on
      }
    }
    return value;
  });
     console.log(filtered);
     return filtered;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });// should return [{ first: 'Tybalt', last: 'Capulet' }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});// should return [].
console.log("<----------------------next exercise------------------------->");


console.log("Spinal Tap Case");
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  console.log(str.toLowerCase().split(/(?:_| )+/) .join('-'));
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}
// Unit test:
spinalCase("This one goes to 11");// Sorry but in the spirit of spinal tap.
spinalCase("thisIsSpinalTap");// should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show");// should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh");// should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things");// should return "all-the-small-things".
console.log("<----------------------next exercise------------------------->");


console.log("Pig Latin");
//Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
  var pigLatin = '';
  var RegExp = /[aeiou]/gi;
  if (str[0].match(RegExp)) {
    pigLatin = str + 'way';
    //console.log('Test 1st letter is a aeiou');
  } else if(str.match(RegExp) === null) {
    pigLatin = str + 'ay';
    //console.log('Test there are only consonants');
  } else {
    var vowelIndex = str.indexOf(str.match(RegExp)[0]);
    //console.log(vowelIndex = str.indexOf(str.match(RegExp)[0]));
    pigLatin = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
  }  
  console.log(pigLatin);
  return pigLatin;
}
translatePigLatin("consonant");// should return "onsonantcay
translatePigLatin("california");// should return "aliforniacay".
translatePigLatin("paragraphs");// should return "aragraphspay".
translatePigLatin("glove");// should return "oveglay".
translatePigLatin("algorithm");// should return "algorithmway".
translatePigLatin("eight");// should return "eightway".
translatePigLatin("myclm");// should return "eightway".
translatePigLatin("shmmnd");// should return "eightway".
console.log("<----------------------next exercise------------------------->");


console.log("Search and Replace");
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
function myReplace(str, before, after) {  
   console.log(str + "  Change -->  " + before +"  to -->  " + after ); //Degugging
  var myStr = str.split(" ");
  let index = myStr.indexOf(before);
  let word = myStr.splice(index,1);
  var exp = /[A-Z]/g;   
  if (word[0].search(exp) === -1) {
    myStr.splice(index, 0, after);
    console.log("Solution:  " + myStr.join(" "));//Debugging
    return myStr.join(" ");
  } else {
    after = after.replace(after[0], after[0].toUpperCase());
    myStr.splice(index, 0, after);
    console.log("Solution:  " + myStr.join(" "));//Debugging
    return myStr.join(" ");
  }
};
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log("<----------------------next exercise------------------------->");


console.log("DNA Pairing");
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array. For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]. The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  //constant seq (DNA Sequence) object with all possible pairings.
  const seq = {T:'A', A:'T', G:'C', C:'G'};  
  let myArr = str.split('');//split str into myArr.
  console.log(myArr = str.split(''));//Debugging 
  for (let i = 0; i < myArr.length; i++){
     myArr[i] = [myArr[i], seq[myArr[i]]];
  }; //replace 1d myArr item w/  2d myArr.
  console.log(myArr);//Debugging
  return myArr;
};
// test here
pairElement("GCG");// should return [["G","C"],["C","G"],["G","C"]].
pairElement("ATCGA"); //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
console.log("<----------------------next exercise------------------------->");


console.log("Missing letters");
//Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
function fearNotLetter(str) {//MySolution Map and Split
  let myStr = str.charCodeAt(0), missing;
  console.log(str);//debugging
  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == myStr) {
      ++myStr;
    } else {
      missing = String.fromCharCode(myStr);
    }
  });
  console.log("Missing -->  " + missing)//debugging
  return missing;
}
// test here 
fearNotLetter("abce");
console.log("<----------------------next exercise------------------------->");

console.log("Sorted Union");
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
function uniteUnique(arr) {
  console.log(arr);
  console.log([].concat(...arguments));
  let myArray = [].concat(...arguments);
  console.log( [...new Set(myArray)]);
  return [...new Set(myArray)];
}
// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log("<----------------------next exercise------------------------->");

console.log("Convert HTML Entities");
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. (You got to be kidding me!!!)
 function convertHTML(str) {
      const htmlEnt={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '\"':'&quot;',
        '\'':"&apos;"
      };
  return str.split('').map(function(ojbect){//Use Split and map function to filter str.
        return htmlEnt[ojbect] || ojbect;
      }).join('');//Use .join prototype
  };  
//test here
console.log(convertHTML("Dolce & Gabbana")); //should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve")); //should return Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); //should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Schindler's List")); //should return Schindler&​apos;s List.
console.log(convertHTML("<>")); //should return &​lt;&​gt;.
console.log(convertHTML("abc")); //should return abc.
console.log("<----------------------next exercise------------------------->");

console.log("Sum All Odd Fibonacci Numbers");
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
function sumFibs(num) {
  // create an array of fibo numbers till num
  var fibo = [1];
  for (var n = 1; n <= num;) {
      fibo.push(n);
      n = fibo[fibo.length - 1] + fibo[fibo.length - 2];
      console.log(n);
  }
  // return the sum of odd numbers from fibo
  var fiboSum = fibo.reduce(function(prev, curr) {
      if (curr %2 !== 0) return prev + curr;
      else return prev;
    }); 
  console.log("sum --> " + fiboSum);
  return fiboSum;
}
// test here
sumFibs(4);
console.log("<----------------------next exercise------------------------->");

console.log("Sum All Primes");
//Sum all the prime numbers up to and including the provided number. A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two. The provided number may not be a prime.
function sumPrimes(num) {
  function myPrime(number){
      for (let i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
             return false;
          }
       }
    return true;
  };
  if (num === 1){
    return 0;
  };
  if(myPrime(num) === false){
    return sumPrimes(num - 1);
  };
  // Check if your number is prime
  if(myPrime(num) === true){
    return num + sumPrimes(num - 1);
  }
};
// test here
console.log(sumPrimes(10));
console.log("<----------------------next exercise------------------------->");

console.log("Smallest Common Multiple");
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
function smallestCommons(arr) {
let max = Math.max(arr[0],arr[1]);
let min = Math.min(arr[0],arr[1]);
//console.log(max + " & " + min);//Debugging

  function smallComMulti(a, b){ //find smallest Common Multiple
    for(var i = 1; i <= b; i++){     
      if((i * a) % b === 0){
        //console.log(i * a);//Debugging
        return (i * a);
      }
    }   
  };    
  let myNum = smallComMulti(max, min);
  for(var ii = min + 1; ii < max; ii++) {    
    myNum = smallComMulti(myNum, ii);   
  }
  console.log(myNum);
  return myNum;
};
// test here
smallestCommons([1,5]);
console.log("<----------------------next exercise------------------------->");

console.log("Drop it");
//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
//Resources to solve this: [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), [JavaScript Operators](https://www.w3schools.com/js/js_operators.asp), [javascript-splice-vs-slice](http://www.tothenew.com/blog/javascript-splice-vs-slice/), 
function dropElements(arr, func) {
  console.log(arr.slice(arr.findIndex(func) >= 0
    ? arr.findIndex(func): arr.length, arr.length));//Used for debugging
  return arr.slice(arr.findIndex(func) >= 0 
    ? arr.findIndex(func): arr.length, arr.length);
};
// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
console.log("<----------------------next exercise------------------------->");

console.log("Steamroller");
//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  let myArr = [].concat(...arr);
  console.log(myArr);//Debugging
  //console.log(myArr.some(Array.isArray) ? steamrollArray(myArr) : myArr);//Debugging
  return myArr.some(Array.isArray) 
    ? steamrollArray(myArr) : myArr;
   //console.log(myArr); //Debugging
};
// test here
steamrollArray([[["a"]], [["b"]]]);// should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]);// should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]);// should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]);// should return [1, {}, 3, 4].
console.log("<----------------------next exercise------------------------->");

console.log("Binary Agents");
//Return an English translated sentence of the passed binary string. The binary string will be space separated.
//Learned something new from: [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode), [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
function binaryAgent(str) {
    console.log(str);//Debugging
    console.log(String.fromCharCode(...str.split(" ").map(function(char){
      return parseInt(char, 2); })));//Debugging 
    return String.fromCharCode(...str.split(" ").map(function(char){ 
      return parseInt(char, 2); }));
    };
    // test here
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log("<----------------------next exercise------------------------->");

console.log("Everything Be True");
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument). In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false. In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context. Remember, you can access object properties through either dot notation or [] notation.
function truthCheck(collection, pre) {
  // Is everyone being true?
  console.log(collection.every(item => item[pre]));
  return collection.every(item => item[pre]);
}
// This solution uses new prototype (to me)[Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log("<--------Alt Solution--------->");

console.log("Everything Be True- alt");
function truthCheckAlt(collection, pre) {
  // Is everyone being true?
  console.log(collection.every(function (item) {
    return item.hasOwnProperty(pre) && Boolean(item[pre]);
  }));
  return collection.every(function (item) {
    return item.hasOwnProperty(pre) && Boolean(item[pre]);
  });
}
//[Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
// test here
truthCheckAlt([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log("<----------------------next exercise------------------------->");

console.log("Arguments Optional");
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. Calling this returned function with a single argument will then return the sum:
//var sumTwoAnd = addTogether(2);
//sumTwoAnd(3) returns 5.
//If either argument isn't a valid number, return undefined.
function addTogether() {
  function isNum (num) {
    return Number.isInteger(num) ? num : undefined;
  };//Check is arg a #  
  let a = isNum(arguments[0]);
  let b = isNum(arguments[1]);  
  if (arguments.length > 1) {
    return isNum(a + b);
  } else if (a) {
    return function(myArg) {
      return addTogether(a, myArg);
    };
  };
};
// test here
console.log(addTogether(2,3));
console.log("<----------------------next exercise------------------------->");

console.log("Make a Person");
//Fill in the object constructor with the following methods below:
//getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
//Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  this.setFullName = function(name) {
    fullName = name;
  };
};
// test here
var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log("<----------------------next exercise------------------------->");

console.log("Map the Debris");
//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds). The array will contain objects in the format {name: 'name', avgAlt: avgAlt}. You can read about orbital periods on [Wikipedia](https://en.wikipedia.org/wiki/Orbital_period). The values should be rounded to the nearest whole number. The body being orbited is Earth. The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let myArr = [];
  let getOrbPeriod = function(obj) {
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c / GM);
    let orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };
  for (var element in arr) {
    myArr.push(getOrbPeriod(arr[element]));
  }
  console.log(myArr);
  return myArr;
};
// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log("<----------------------exercise complete------------------------->");

