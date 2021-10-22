'use strict';
// #Now lets use inheritance on Object.create

const Person = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const roger = Object.create(Person);

const Student = Object.create(Person);
Student.init = function (firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
};

Student.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jane = Object.create(Student);
jane.init('Jane', 2001, 'Psychology');
jane.introduce();
jane.calcAge();
