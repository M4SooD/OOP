'use strict';
// #Now Lets take a look at inheritance between classes using constructor functions.
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

// #Inhertiance: means that the child class can share behavior from their parent class.

// + Child class should have the functionality of parent class but wiht some additonal functionality.

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototypes = Making the prototype of person object be the prototype of student.prototype(Inherit from it but dont be an exacnt same object)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const kenny = new Student('Kenny', 1998, 'English Literature');
console.log(kenny);
kenny.introduce();
kenny.calcAge();

console.log(kenny.__proto__);
console.log(kenny.__proto__.__proto__);
console.log(kenny instanceof Student);
console.log(kenny instanceof Person);
console.log(kenny instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
