//Learn About Functional Programming
//In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.
/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';
/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  };
  return teaCups;
};
// Add your code below this line
//const tea4TeamFCC = getTea(40); // :)My solution
const tea4TeamFCC = getTea(4); // :)My solution shortened
// Add your code above this line
console.log(tea4TeamFCC);
console.log("-------------------Next------------------------");

//Understand Functional Programming Terminology
//Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.
/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';
/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';
/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea1 = (prepareTea, numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// Add your code below this line
//const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27); // :( My solution TOO LONG
//const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13); // :( My solution TOO LONG
const tea4GreenTeamFCC = getTea1(prepareGreenTea, 2); // :) my solution short and sweet
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 2); // :) my solution short and sweet
// Add your code above this line
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
console.log("-------------------Next------------------------");

//Understand the Hazards of Using Imperative Code
//Run the code in the editor. It's using a method that has side effects in the program, causing incorrect output. The final list of open tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the output will be slightly different.
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};
// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};
// When you close a tab
Window.prototype.tabClose = function (index) {// Offending bug here!!!
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
  return this;
 };
// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites
// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());

//alert(finalTabs.tabs);
console.log(finalTabs.tabs);
console.log("-------------------Next------------------------");

//Avoid Mutations and Side Effects Using Functional Programming
//Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.
var fixedValue = 4;
function incrementer () {
  // Add your code below this line
  let num = fixedValue + 1;//my solution
  return num; //my solution 
  // Add your code above this line
}
var newValue = incrementer();
console.log(newValue = incrementer()); // Should equal 5
console.log(fixedValue); // Should print 4
console.log("-------------------Next------------------------");

//Pass Arguments to Avoid External Dependence in a Function
//Write the incrementer function so it takes an argument, and then increases the value by one.
// the global variable
var fixedValue1 = 4;
// Add your code below this line
function incrementer1 (fixedValue1) {
  let num1 = fixedValue1 +1;
  return num1
  // Add your code above this line
}
var newValue = incrementer1(fixedValue1); // Should equal 5
console.log(newValue);
console.log(fixedValue1); // Should print 4
console.log("-------------------Next------------------------");

//Refactor Global Variables Out of Functions
//Refactor (rewrite) the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of an array. The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one
// Add your code below this line
function add (bookList, bookName) {//My solution. This one was a bear
  let newList = [...bookList]
  newList.push(bookName);
  return newList;
// Add your code above this line
}
/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one
// Add your code below this line
function remove (myArr, bookName) {//My solution. This one was a bear
  let myBookList = [...myArr];
  if (myBookList.indexOf(bookName) >= 0) {
    myBookList.splice(myBookList.indexOf(bookName), 1);    
    return myBookList
    // Add your code above this line
    }
}
var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList = add(bookList, 'A Brief History of Time'));
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies'));
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies'));
//console.log(bookList);
console.log("-------------------Next------------------------");

//Use the map Method to Extract Data from an Array
//The watchList array holds objects with information on several movies. Use map to pull the title and rating from watchList and save the new array in the rating variable. The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.
// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];
// Add your code below this line
var rating = watchList.map(function(myWatchlist) {
   return {title: myWatchlist.Title, rating: myWatchlist.imdbRating};
});
// Add your code above this line
console.log(rating); 
console.log("-------------------Next------------------------");


//Implement map on a Prototype
//Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.
// the global Array
var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  console.log("this -->" + this.length);//Debug
   for (let i = 0; i < this.length; i++) {     
    newArray.push(callback(this[i]));
   };
   //Either of these solutions will work I tried both "for" and "forEach" below;
  console.log("this -->" + this);//Debug  
  this.forEach(function(item){
    newArray.push(callback(item));
  });
    // Add your code above this line
  return newArray;
};
var new_s = s.myMap(function(item){
  return console.log(item * 2);
});
console.log("s -->" + s);//Debug
// Resourses for this excersize: [Mozzelia.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objectcts/Array/forEach#Converting_a_for_loop_to_forEach)
console.log("-------------------Next------------------------");

//Use the filter Method to Extract Data from an Array
//The variable watchList holds an array of objectcts with information on several movies. Use a combination of filter and map to return a new array of objectcts with only title and rating keys, but where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the objectct and you may want to convert them into numbers to perform mathematical operations on them.
// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];
// Add your code below this line
var filteredList = watchList.filter(obj => Number(obj.imdbRating) >= 8.0) .map((obj => ({title: obj.Title, rating: obj.imdbRating})));
// Add your code above this line
console.log(filteredList);
// Resourses for this excersize: [Array Map, Filter and Reduce in JS](https://atendesigngroup.com/blog/array-map-filter-and-reduce-js)
console.log("-------------------Next------------------------"); 

//Implement the filter Method on a Prototype
//Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.
// the global Array
var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
   console.log("this -->" + s);//Debug  
   this.forEach(function(obj) { //My solution
    console.log("this -->" + obj);//Debug  
     if (callback(obj) == true) { //My solution
       newArray.push(obj); } });//My solution
      console.log("this -->" + newArray);//Debug  
  // Add your code above this line
  return newArray;
};
var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
// Resourses for this excersize: [Array Map, Filter and Reduce in JS](https://atendesigngroup.com/blog/array-map-filter-and-reduce-js)
console.log("-------------------Next------------------------");

//Return Part of an Array Using the slice Method
//Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  var newArray = anim.slice(beginSlice, endSlice);
  return newArray;
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));
console.log("-------------------Next------------------------");

//Remove Elements from an Array Using slice Instead of splice
//Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
//Do not mutate the original array provided to the function.
function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.splice(3);
  
  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//Combine Two Arrays Using the concat Method
//Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
function nonMutatingConcat(original, attach) {
  // Add your code below this line
  console.log((original), (attach));
  console.log("  Now CONCAT!!!");
  let myArr= first.concat(attach);
  console.log(myArr);
  return myArr;
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
//[Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
console.log("-------------------Next------------------------");

//Add Elements to the End of an Array Using concat Instead of push
//Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  console.log((original), (newItem));//debugging
  console.log(original.concat(newItem));//debugging
  return original.concat(newItem);//My solution This looked a lot like the previous one  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5]; 
nonMutatingPush(first, second);
//[Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
console.log("-------------------Next------------------------");

//Use the reduce Method to Analyze Data
//The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];
// Add your code below this line
let averageRating = watchList.filter(obj => obj.Director === 'Christopher Nolan').map(obj => Number(obj.imdbRating)).reduce((obj1, obj2) => obj1 + obj2) / watchList.filter(obj => obj.Director === 'Christopher Nolan').length;
// Add your code above this line
console.log(averageRating)
//Excersize: [Array Map, Filter and Reduce in JS](https://atendesigngroup.com/blog/array-map-filter-and-reduce-js)
console.log("-------------------Next------------------------");

//Sort an Array Alphabetically using the sort Method
//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a > b;
  });  
  // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
console.log("-------------------Next------------------------");

//Return a Sorted Array Without Changing the Original Array
//Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
   let newArray = [];
   console.log(globalArray);
   console.log(newArray.concat(arr).sort((a,b) => a - b));
  return newArray.concat(arr).sort((a,b) => a - b);  
  // Add your code above this line
};
nonMutatingSort(globalArray);
console.log("-------------------Next------------------------");

//Split a String into an Array Using the split Method
//Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
function splitify(str) {
  // Add your code below this line
  console.log(str);//debugging
  var remPunc = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ");// my solution
  console.log(remPunc);//debugging
  return remPunc.split(" ");//mysolution
  // Add your code above this line
}
splitify("Hello World,I-am code");
//vital info for solving: [stackoverflow strip all punctuation](https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex)
console.log("-------------------Next------------------------");

//Combine an Array into a String Using the join Method
//Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.
function sentensify(str) {
  // Add your code below this line
  return str.split(/\W+/).join(" ");//I got stumped (My solution)
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));
console.log(sentensify("There,has,been,an,awakening"));
//BAD ONE!!! [stackoverflow Using split/join](https://stackoverflow.com/questions/6442327/using-split-join-to-replace-a-string-with-a-array)
console.log("-------------------Next------------------------"); 

//Apply Functional Programming to Convert Strings to URL Slugs
//Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
//The input is a string with spaces and title-cased words
//The output is a string with the spaces between words replaced by a hyphen (-)
//The output should be all lower-cased letters
//The output should not have any spaces
// the global variable
var globalTitle = "Winter Is Coming";
// Add your code below this line
function urlSlug(title) {
console.log("First --> "+ title);//DEbugging
var myTitle = title.split(/\W+/); //from previous excersize
console.log("Second  --> "+ myTitle);//DEbugging
var filterTitle = myTitle.filter(function(obj){// my solution-Mozilla.org
return /\S/.test(obj);// Mozilla.org
});
console.log("Third  --> "+ filterTitle.join("-").toLowerCase());//DEbugging
console.log("Finally Global  --> "+ globalTitle);//DEbugging
return filterTitle.join("-").toLowerCase();// StackOverflow!!!
};// ARRRGGGGGHHH!!!!! This was hard!!!!!
// Add your code above this line
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
//Additional tests....
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");// should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".
urlSlug("Hold The Door");// should return "hold-the-door".(https://stackoverflow.com/questions/6442327/using-split-join-to-replace-a-string-with-a-array)
//this challange sort of sucked!!! Took me a long time :(
//This helped https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
//and this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
console.log("-------------------Next------------------------");

//Use the every Method to Check that Every Element in an Array Meets a Criteria 
//Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
function checkPositive(arr) {
  // Add your code below this line
  var numbers = arr;
  return numbers.every(function(currentValue) {
    return currentValue > 0;
  });
  //Or I could do
  //return arr.every((n) => {return n > 0;}); 
  // Add your code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));//should return false.
console.log(checkPositive([1, 2, 3, 4, 5]));//should return true.
console.log(checkPositive([1, -2, 3, -4, 5]));//should return false.
console.log("-------------------Next------------------------");

//Use the some Method to Check that Any Elements in an Array Meet a Criteria
//Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
function checkPositive1(arr1) {
  // Add your code below this line
  var numbers = arr1;
  return numbers.some(function(currentValue1) {
    return currentValue1 > 0;
  });  
  // Add your code above this line
}
console.log(checkPositive1([1, 2, 3, -4, 5]));//should return true.
console.log(checkPositive1([1, 2, 3, 4, 5]));//should return true.
console.log(checkPositive1([-1, -2, -3, -4, -5]));//should return false.
console.log("-------------------Next------------------------");

//Introduction to Currying and Partial Application
//Fill in the body of the add function so it uses currying to add parameters x, y, and z.
function add(x) {
  // Add your code below this line 
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }  
  // Add your code above this line
}
console.log(add(10)(20)(30));//should return 60.
console.log(add(1)(2)(3)); //should return 6.
console.log(add(11)(22)(33)); //should return 66.
//Your code should include a final statement that returns x + y + z.
console.log("-------------------Next------------------------");

