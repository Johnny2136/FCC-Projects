//se an Array to Store a Collection of Data
let yourArray = ['one', 2, "three", true, 6, ];//change this line
console.log(yourArray.length);

//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
console.log(myArray);
// change code below this line
myArray[1] = 42;
//change code above this line
console.log(myArray);

//Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  // change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // change code above this line
  return arr;
}
// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

//Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // change this line (This was tricky I was over thinking it)
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}
// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Remove Items Using splice()
function sumOfTen(arr) {
  // change code below this line
   arr.splice(1, 2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
//Use an Array to Store a Collection of Data
let yourArray = ['one', 2, "three", true, 6, ];//change this line
console.log(yourArray.length);

console.log("---- Divider ----");

//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
console.log(myArray);
// change code below this line
myArray[1] = 42;
//change code above this line
console.log(myArray);

console.log("---- Divider ----");

//Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  // change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // change code above this line
  return arr;
}
// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

console.log("---- Divider ----");

//Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // change this line (This was tricky I was over thinking it)
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}
// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

console.log("---- Divider ----");

//Remove Items Using splice()
function sumOfTen(arr) {
  // change code below this line
   arr.splice(1, 2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}
// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

console.log("---- Divider ----");

//Add Items Using splice()
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');//My solution
  // change code above this line
  return arr;
}  
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

console.log("---- Divider ----");

//Copy Array Items Using slice()
function forecast(arr) {
// change code below this line
  return arr.slice(2, 4); //My solution
}
// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//or another way of doing it

function forecastAlt(arr) {
// change code below this line
let myArr = arr.slice(2, 4) ;
console.log("This is the content of myArr = " + myArr); //for debugging
console.log("This is the content of arr = " + arr); //for debugging
return arr = myArr; //my solution
}
// do not change code below this line
console.log(forecastAlt(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

console.log("---- Divider ----");

//Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);//my solution
    // change code above this line
    num--;
  }
  return newArr;
}
// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

console.log("---- Divider ----");

//Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is','fun']; // change this line (My solution)
  return sentence;
}
// do not change code below this line
console.log(spreadOut());

//Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  // change code below this line
  return arr.indexOf(elem) === -1 ? false : true; 
  // change code above this line
}
// change code here to test different cases:
console.log(quickCheck(["squash", "onions", "shallots"], "onions"));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
console.log(quickCheck([true, false, false], undefined));

console.log("---- Divider ----");

//Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line (my solution)
  for(let i=0; i < arr.length; i++){ //looping based on arr length
    if(arr[i].indexOf(elem)===-1){ // checking for elements
        newArr.push(arr[i]); //push results to new array
    }
  }
  // change code above this line
  return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Create complex multi-dimensional arrays
let myNestedArray = [ 'level 1', // My solution it passes but the output in repl.it is strange
  // change code below this line
 ['level', 2], // an array nested 2 levels deep   
 [['level', 3], ['deep']], // 2 arrays nested 3 levels deep   
 [[['level', 4], ['deeper']]], // 2 arrays nested 4 levels deep   
 [[[['level', 5], ['deepest']]]] // 2 arrays nested 5 levels deep    
  // change code above this line
];
console.log(myNestedArray);

console.log("---- Divider ----");

//Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// change code below this line
foods.bananas = 13; // my solution
foods.grapes = 35;// my solution
foods.strawberries = 27;// my solution
// change code above this line
console.log(foods);

//Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
// change code below this line
console.log(userActivity);
userActivity.data.online = 45;
// change code above this line
console.log(userActivity);

console.log("---- Divider ----");

//Access Property Names with Bracket Notation
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line
function checkInventory(scannedItem) {
  // change code below this line
return foods2[scannedItem];
}
// change code below this line to test different cases:
console.log(checkInventory("apples"));

console.log("---- Divider ----");

//Use the delete Keyword to Remove Object Properties
let foods3 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// change code below this line
console.log(foods3);
if (!('multiD' in Object.prototype)) {
Object.defineProperty(Object.prototype, 'multiD', {
    value: function () {
        for (var i = 0; i < arguments.length; i++) {
            delete this[arguments[i]];
        }
    }
});
}
foods3.multiD("oranges", "plums", "strawberries");
// change code above this line
console.log(foods3);

console.log("---- Divider ----");

//Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  /*Jeff: {
    age: 32,
    online: true
  },*/
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(obj) {
  // change code below this line (My solution)
  let names = ['Alan', 'Jeff', 'Sarah', 'Ryan'];//list of names unit test is looking for
  let check = names.map(x => x in users);//map the array and check against users array
  return (check.includes(false) ? false : true);//if check is false, return false, else return true
 // change code above this line
};
console.log(isEveryoneHere(users));
//Alternativly I did below first and it took an hour to make it work
function isEveryoneHereAlt(obj) {
  // change code below this line
  if (["Alan", "Jeff", "Sarah", "Ryan"] in users){ 
    return true; 
  }else{ 
    return false; }
  // change code above this line
}

console.log(isEveryoneHereAlt(users));

console.log("---- Divider ----");

//Iterate Through the Keys of an Object with a for...in Statement
//use a for...in statement within this function to loop through the users 
//in the users object and return the number of users whose online property is set to true.
let user = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function countOnline(obj) {
  // change code below this line
let onlineUsers = 0;
  for(let user in obj){
    if(obj[user].online === true){
      onlineUsers = onlineUsers + 1;
    }
  }
  return onlineUsers;
  // change code above this line
}
console.log(countOnline(user));

console.log("---- Divider ----");

//Generate an Array of All Object Keys with Object.keys()
//Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
let users2 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);//OH GOD!!! an hour just because I forgot to capitalize O
  // change code above this line
}
console.log(getArrayOfUsers(users2));

console.log("---- Divider ----");

//Modify an Array Stored in an Object
/*Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array */
let user2 = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
console.log(user2.data.friends);
function addFriend(userObj, friend) {
  // change code below this line  
 	user2.data.friends.push(friend);
  return user2.data.friends;;
  // change code above this line
};
console.log(addFriend(user2, 'Pete'));
