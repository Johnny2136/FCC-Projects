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

console.log("--------------------------------------------");

//Iterate Over All Properties (for monday day 13)
//Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle1 = new Dog("Snoopy");
let ownProps1 = [];
let prototypeProps = [];
// Add your code below this line 
for (let property in beagle1) {
  if(beagle1.hasOwnProperty(property)) {
    ownProps1.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(beagle1); // prints Snoopy
console.log(ownProps1); // prints Snoopy
console.log("--------------------------------------------");

//Understand the Constructor Property (not done yet)
//Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle2 = new Dog("Snoopy");
let ownProps2 = [];
let prototypeProps2 = [];
// Add your code below this line 
for (let property in beagle2) {
  if(beagle2.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps2.push(property);
  }
}
console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
console.log("--------------------------------------------");

//Understand the Constructor Property
//Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
function Dog(name) {
  this.name = name;
}
// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
     return true;
   } else {
    return false;
   }
}
console.log(Dog); // prints ["name"]
console.log(joinDogFraternity); // prints ["numLegs"]
console.log("--------------------------------------------");

//Change the Prototype to a New Object
//Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
function Dog(name) {
  this.name = name; 
}
Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
console.log(Dog.prototype);
console.log("--------------------------------------------");

//Remember to Set the Constructor Property when Changing the Prototype
//Define the constructor property on the Dog prototype.
function Dog(name) {
  this.name = name; 
}
// Modify the code below this line
Dog.prototype = { 
  constructor: Dog, 
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
console.log(Dog.prototype);
console.log("--------------------------------------------");

//Understand Where an Object’s Prototype Comes From
//Use isPrototypeOf to check the prototype of beagle.
function Dog(name) {
  this.name = name;
}
let beagle3 = new Dog("Snoopy");
// Add your code below this line
Dog.prototype.isPrototypeOf(beagle3);
// My solution returns true
console.log(Dog.prototype.isPrototypeOf(beagle3));
console.log("--------------------------------------------");

//Understand the Prototype Chain
//All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
function Dog(name) {
  this.name = name;
}
let beagle4 = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle4);  // => true
// Fix the code below so that it evaluates to true
//???.isPrototypeOf(Dog.prototype);//original
Object.prototype.isPrototypeOf(Dog.prototype);//my solution returns true
console.log(Object.prototype.isPrototypeOf(Dog.prototype));
console.log("--------------------------------------------");

//Use Inheritance So You Don't Repeat Yourself
//The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
function Cat(name) {
  this.name = name;
  console.log("My name is " + this.name);  
}
Cat.prototype = {
  constructor: Cat, 
  //eat: function() {// remove this
    //console.log("nom nom nom");
  //}
};
function Bear(name) {
  this.name = name;
  console.log("My name is " + this.name);  
}
Bear.prototype = {
  constructor: Bear, 
  //eat: function() {// remove this
    //console.log("nom nom nom");
 //}
};
function Animal() { }
Animal.prototype = {
  constructor: Animal,
    eat: function() {// my solution
    console.log("nom nom nom");
    }
};
Cat("HelloKitty");
Bear("yogi");
console.log(Object.prototype.isPrototypeOf(Animal.prototype));
console.log("--------------------------------------------");

//Inherit Behaviors from a Supertype
//Use Object.create to make two instances of Animal named duck and beagle.
function Animal() { }
Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};
// Add your code below this line
let duck = Object.create(Animal.prototype);; // Change this line// my solution
let beagle5 = Object.create(Animal.prototype); // Change this line// my solution
duck.eat(); // Should print "nom nom nom"
beagle5.eat(); // Should print "nom nom nom"
console.log("--------------------------------------------"); 

//Set the Child's Prototype to an Instance of the Parent
//Modify the code so that instances of Dog inherit from Animal.
function Animal2() { }
Animal2.prototype = {
  constructor: Animal2,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog2() { };
// Add your code below this line
Dog2.prototype = Object.create(Animal2.prototype);// my solution
let beagle6 = new Dog2();
beagle6.eat();  // Should print "nom nom nom"
console.log("--------------------------------------------");

//Reset an Inherited Constructor Property
//Fix the code so duck.constructor and beagle.constructor return their respective constructors.
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Add your code below this line
Bird.prototype.constructor = Bird;// my solution
Dog.prototype.constructor = Dog;// my solution
let duck7 = new Bird();
let beagle7 = new Dog();
console.log(new Bird());
console.log(new Dog());
console.log("--------------------------------------------");

//Add Methods After Inheritance
//Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);// my solution
Dog.prototype.constructor = Dog;// my solution
Dog.prototype.bark = function() {// my solution
  console.log( "Woof!");// my solution
};
// Add your code above this line
let beagle8 = new Dog();
beagle8.eat(); // Should print "nom nom nom"
beagle8.bark(); // Should print "Woof!" 
console.log("--------------------------------------------");

//Override Inherited Methods
//Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Add your code below this line
// Penguin.fly() overrides Bird.fly()
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};
// Add your code above this line
let penguin = new Penguin();
console.log(penguin.fly());
console.log("--------------------------------------------");

//Use a Mixin to Add Common Behavior Between Unrelated Objects
//Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
let bird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};
// Add your code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding, wooosh!");
  }
};
 glideMixin(bird);
 glideMixin(boat);
bird.glide(); // prints "Gliding, wooosh!"
boat.glide();
console.log(bird); // prints "Gliding, wooosh!"
console.log(boat); // prints "Gliding, wooosh!"
console.log("--------------------------------------------");

//Next
