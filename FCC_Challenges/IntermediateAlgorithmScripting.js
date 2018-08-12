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
spinalCase("This Is Spinal Tap");// should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap");// should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show");// should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh");// should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things");// should return "all-the-small-things".
console.log("<----------------------next exercise------------------------->");

