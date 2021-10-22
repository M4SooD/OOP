'use strict';
// #Lets now talk about a common feature of all objects in JS, called getters and setters.

// + getters and setter are basically functions that get and set value, but they still look like a regular properties.

const account = {
  owner: 'Don',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//+ It is not mandatory to specify a setter when we have a getter for the same property.

//Getter
console.log(account.latest);
//Setter
account.latest = 50;
console.log(account.latest);

//Getter & Setter in ES6 Classes
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

const masood = new Person('Masood Moosavi', 1996);

console.log(masood.age);
console.log(masood.fullName);
