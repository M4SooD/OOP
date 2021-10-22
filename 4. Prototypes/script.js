'use strict';
// #Lets now learn how Protypes works, and what Prototypal Inheritance and The Prototype Chain acutally are.

// + Every function in JS automatically has a property called prototype, including constructor functions.
/* + Every object that's created by a constructor function will get access to all the methods and properties
that we defind on the constructor prototype property. */
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const masood = new Person('Masood', 1996);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

/* #Prototypal Inheritance/Deligation : If a property or a method cannot be found in a certain object, 
JS will look into it's prototype */
masood.calcAge();

// +  __proto__ always points to an object's prototype.
console.log(masood.__proto__);
console.log(masood.__proto__ === Person.prototype);

// + Person.prototype is not the prototype of person, its the prototype of objects created by Person
// + The prototype of Person.prototype is Object.prototype.
// #Object.prototype: built- in constructor functions for objects. this is used when we write an object literal. {} === new Object()
console.log(Person.prototype.isPrototypeOf(masood));
console.log(Person.prototype.isPrototypeOf(Person));

// #Portotype Chain: Series of links between the objects, is what is called the prototype chain (Similar to Scope Chain).
// + Object.prototype is on on top of prototype chain, and also it's prototype is null.

//Adding new methods and properties to the
Person.prototype.species = 'Homo Sapiens';
console.log(masood.species);

//Methods getting inherited from the protoype chain, hasOwnProperty is one the built-in methods in Object.prototype.
console.log(masood.hasOwnProperty('firstName'));
console.log(masood.hasOwnProperty('species'));
