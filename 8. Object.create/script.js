'use strict';
// #Lets now work with Object.create which works in a pretty diffrent way than classes and constructor functions.

/* With Object.create we still have prototypal inheritance.
 However there are no portotoype properties involved and also no constracturo function and no new operator. */

// + We can use Object.create to manually set the prototype of an object to any other object that we want.

const Person = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const masood = Object.create(Person);
masood.name = 'Masood';
masood.birthYear = 1996;

console.log(masood);
masood.calcAge();
console.log(masood.__proto__ === Person);

const sarah = Object.create(Person);
sarah.init('Sarah', 1969);
sarah.calcAge();

// + Object.create is the least used way of implementing prototypal inheritance.
// + We need Object.create to link prototypes in order to implement inheritance between classes.
