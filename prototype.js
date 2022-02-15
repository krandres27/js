class Person {
  talk() {
    return 'talking';
  }
}

// With this approach talk will be a method inside prototype and in this way its intances
// are not going to create a new copy of this, they will use the father's method
// inheritance is kink of applicable here

// the above code is only syntactic sugar
// under the hoods js is using functions (objects)
// and the prototype inheritance method
// the same could be written as:

const andres = new Person();
console.log(andres)
console.log(andres.__proto__)
console.log(Person.prototype.isPrototypeOf(andres))

function Person2() { 
  // constructor function
  this.talk = () => 'hola'
  // with this approach talk will be another property for the instances, each of them will
  // create a new object to get this 'method'
}

Person2.prototype.talk = () => 'talking'
// With this approach talk will be a method inside prototype and in this way its intances
// are not going to create a new copy of this, they will use the father's method
// inheritance is kink of applicable here

const carlos = new Person2();
console.log(carlos);
console.log(carlos.__proto__)
console.log(Person2.prototype.isPrototypeOf(carlos))