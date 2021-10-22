'use strict';
// # With ES6 Classes we using the same thing as constructor functions but with a nice syntax

// + Classes in JS dosen't work like traditional classes in other languages like java or ...
// + Classes in JS are just synthetic sugar.
// + Clasess are just a special kind of functions behind the scenes.

// Class expression
const Person1 = class {};

// Class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Instance Methods
  // + Methods will be added to .prototype property.
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  great() {
    console.log(`Hey ${this.firstName}`);
  }
  //Static method
  static hey() {
    console.log('Hey There💛');
  }
}

const masood = new Person('Masood', 1996);
console.log(masood);
masood.calcAge();

masood.great();

/* #Some important things about classes :
 1. Clasess are NOT hoisted(We can't use them before they are declared)
 2. Classes are first-class citizens(We can pass them into functions and also return them from functions)
 3. Clasess are exectued in strict mode.
*/

Person.hey(); //Static
