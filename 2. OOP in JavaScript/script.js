// #Lets now take a quick look at OOP in JS

// #Prototype: All objects in JS are linked to a certain prototype object. that means every object has a prototype.
// #Prototype Inheritance: The prototype object contains methods and properties that are accessible to all objects linked to that prototype.
// #Delegation: Objects delegate methods to the linked prototype object.

// #How do we actually create prototypes? And how do we link objects to prototypes? How can we create new objects, without having classes?
/* - there are 3 diffrent ways of doing all this:
 1. Constructor Functions: a way of creating objects programmatically, using a function which will also set the new object's prototype.
    + This is how built-in objects like arrays, maps and sets are implemented.

 2. ES6 Classes (Synthetic Sugar): Modern way of doing OOP in JS. they work exactly like contructor functions but with a nicer synthax.
    +ES6 classes do NOT behave like classes in classical OOP.

 3. Object.create(): the easiest and most straightforward way of linking an object to a prototype object.

 */
