'use strict';
// #Now lets work on inherticane between classes this time with ES6 Classes
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  great() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

const masood = new Person('Masood Moosavi', 1996);

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Super ALways needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${2021 - this.birthYear} years old, but as a student
      i feel more like ${2021 - this.birthYear + 10}`);
  }
}

const peggy = new Student('Peggy Olsen', 1989, 'Computer Science');
peggy.introduce();
peggy.calcAge();
