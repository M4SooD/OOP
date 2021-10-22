'use strict';
// #Lets now learn about Encapsulation which is a very imprtant principle.

// #Encapsulation: to keep some properties and methods private inside the class so they won't be accessible from outside of the class.
/* Why we need Encapsulation and Data privacy?
    1. to prevent code from outside of a class to accidentally manipulate our data inside the class.
    2. When we expose only a small interface(a Small API) then we can change all other internal methods
    with more confidence.
    */
// + JS classes do not yet support real data privacy and encapsulation.
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //Protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public Interface (API)
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Bert', 'EUR', 4578);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
