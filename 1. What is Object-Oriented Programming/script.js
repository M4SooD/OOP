/* 
#What is Object-Oriented Programming?
- OOP is not a programming language or tool.
- OOP is a programing paradigm that is based on the concept of objects(centred around objects rather than functions);
- We use objects to model(describe) real-world(like a user or a to-do list item) or 
abstract features(like an HTML component or some kind of data structure).
- Objects may contain data(Properties) and code(Methods). so we can say that by using objects we 
pack data and all the corresponding behavior into one block.
- In OOP objects are self-contained pieces or blocks of code, their like a small app on their own.
- Objects are building blocks of apps, and make objects interact with one another.
-Interactions happen through a Public Interface(API).
- OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain(avoid Spaghetti code).


*/

//#Paradigm: simply means the style of the code, how we write and organize code.
//#API: methods that the code outside of the object can access and use to communicate with the object.

/* 
#Classes and Instances (Traditional OOP)

- Classes: A blueprint which then can be used to create new objects based on the rules described in the class
- Instances: An instance is a real object that we can use in our code which was created from a class.

+ The process of creating an instance is called instantiation.
+ A class itself is not an object.
+ We can use classes to create as many instances as we need in our app.
*/

/*
#How do we actually design classes? How do we model real-world data into classess?
- There are 4 fundamental principles that can guides us toward a good class implementation:

1- Abstraction: Simply means to ignore or to hide details that don't matter. this allows us to get an overview prespective of
 the thing we're implementing, instead of messing with details that don't raelly matter to our implementation.

2- Encapsulation: Means to keep some properties and methods private inside the class, so that they're not accessible from oustide the class. 
However, some methods can be exposed as a API.
+ With encapsulation we prevent external code from accidantly manipulating internal properties/state.
+ Encapsulation(Using Private keyword) allows us to change internal implementation without the risk of breaking external code.

3- Inheritance: Making all properties and methods of a certain class available to a child class, which then forms a hierarchy between two classes.
this allows us to reuse common logic and to model real-world relationships.
+ Child class extedns the parent class.

4- Polymorphism: Means that a child class can overwrite a method that it inherited from a parent class.

*/
