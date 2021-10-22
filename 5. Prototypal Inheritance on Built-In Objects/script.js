'use strict';
// #Lets now check out Prototypal Inhertiance and the prototype chain on built-in objects such as arrays.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const masood = new Person('Masood', 1996);

//The prototype of masood's prototype:
console.log(masood.__proto__.__proto__);

//The prototype of prototype of masood's prototype(top of the scope chain/ Object.prototype):
console.log(masood.__proto__.__proto__.__proto__);

//Consturctor property of Person.prototype
console.dir(Person.prototype.constructor);

//The prototype of array
const arr = [3, 7, 9, 10, 5, 6, 6, 6, 10, 7, 3, 5]; // new Array === [];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// + The prototypal inheritance is a mechanism for reusing code.

//Extending the functionality of arrays (It's Not a good idea, Don't get used to it)
// + We can add any new method to this prototype and all the arrays will then inherit it.
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
