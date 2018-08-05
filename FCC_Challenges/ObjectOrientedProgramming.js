//Create a Basic JavaScript Object
//Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
let dog = {
 name: "Alfie",
 numLegs: 4 
};
console.log(dog);
console.log("--------------------------------------------")

//Use Dot Notation to Access the Properties of an Object
//Print both properties of the dog object below to your console.
let dog1 = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog1.name);//my solution
console.log(dog1.numLegs);
// This prints properties of dog to the console
console.log("--------------------------------------------");

//Create a Method on an Object
//Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."
let dog2 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){return "This dog has " + dog2.numLegs + " legs.";}// my solution  
};
console.log(dog2.sayLegs());
console.log("--------------------------------------------");

//Make Code More Reusable with the this Keyword
//Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}//my solution
};
console.log(dog3.sayLegs());
console.log("--------------------------------------------");

//Define a Constructor Function
//Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
function Dog() {// my solution
  this.name = "spot";
  this.color = "blue";
  this.numLegs = 4;
}
console.log(Dog);
console.log("--------------------------------------------");

//Use a Constructor to Create Objects
//Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();//my solution
console.log(hound.name); // => Rupert
console.log(hound.color); // => brown
console.log(hound.numLegs); // => 4
console.log("--------------------------------------------");

//Extend Constructors to Receive Arguments
//Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
function Dog(name, color) {
 this.name = name;
 this.color = color;
 this.numLegs = 4; 
}
let terrier = new Dog("Bruce", "red"); //my solution
console.log(terrier);//my solution
console.log("--------------------------------------------");

//Verify an Object's Constructor with instanceof
//Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
/* jshint expr: true */
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Add your code below this line
let myHouse = new House(6);//my solution
console.log(myHouse);
console.log(myHouse instanceof House); // => true
console.log("--------------------------------------------");

//Understand Own Properties
//Add the own properties of canary to the array ownProps.
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); // prints [ "name", "numLegs" ]
console.log("--------------------------------------------");

//Use Prototype Properties to Reduce Duplicate Code
//Add a numLegs property to the prototype of Dog
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
// Add your code above this line
let beagle = new Dog("Snoopy");
console.log(beagle); // prints Snoopy
console.log(Dog); // prints Snoopy
console.log("--------------------------------------------");

