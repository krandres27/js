// a recall of Functions and its flavors

// Anonymous FUnctions
// function () {
//   return 'hello'
// }

// usually becomes a function expression
const sayHello = function() {
  return 'hello';
}

const sayHello = () => 'hello'

// or they can also become a Callback Functions
setTimeout(function() {
  console.log('hello')
}, 0);

setTimeout(() => {
  console.log('hello')
}, 0);

// Named Functions
// no Arrow functions here

// Factory
function sayHello() {
  return 'hello'
}

// Constructor
// arrow functions can't be used as constructor functions
function Person(name) {
  this.name = name
}

// Object Method

const Person = {
  sayHello: function() {
    return `Hello, ${this.name}`
  }
}

const Person = {
  // an arrow function as a method is not recommended
  // because it does not has the context binded to the
  // object itself, it has a lexical context
  // so something like the following will show undefined
  name: 'Carlos',
  sayHello: () => {
    return `Hello, ${this.name}` // this will return Hello, undefined
  }
}