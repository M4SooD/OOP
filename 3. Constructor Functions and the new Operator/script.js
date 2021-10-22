'use strict';
// #Lets work with Constructor Functions now

// + The only difference between a regular function, and a constructor function, is that we call the constructor function with the "New" operator.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // + Never create a method in a constructor
  //   this.calcAge = function () {
  //     console.log(2021 - this.birthYear);
  //   };
};

const masood = new Person('Masood', 1996);
console.log(masood);

// #What happens after calling the function with new operator?
// 1. New object is created.
// 2. function is called,and in the function, this keyword will be set to the new object.
// 3. New object will be linked to prototype
// 4. Function automatically returns the object from the beginning

// + Based on this constructor function, we can make as many object as we want.
const matilida = new Person('Matilda', 1965);
const jack = new Person('Jack', 1987);

console.log(matilida, jack);

// + To check instances, we use instanceof:
console.log(masood instanceof Person);
console.log('melo' instanceof Person);
