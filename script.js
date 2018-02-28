'use strict'
let Person = function(name) {
  this.name = name;
};

Person.prototype.getName = function() {
  return this.name;
};

let aPerson = new Person('Akash');

console.log(aPerson.getName())