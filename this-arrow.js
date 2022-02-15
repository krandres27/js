// const, let, class will not create properties on the global object
var userColor = 'red';

const user = {
  userColor: 'green',
  getColor: () => this.userColor,
  prop: {
    userColor: 'blue',
    getColor: function() {
      return this.userColor
    }
  }
}

// here arrow function is being used, so the context is not the user
// red
console.log(user.getColor())

// here a normal function is being used, so the context is user.prop
// blue
console.log(user.prop.getColor())

// despite theColor is set with the context user.prop, actually the function ins being called from the global scope
// red
const theColor = user.prop.getColor;
console.log(theColor())


function User() {
  this.name = "John Doe",
  this.score = 20,
  this.sayUser = function () {
    console.log(this.name);

    let innerFunction = () => {
      // when `this` refers to the global scope/object
      console.log(this.name)
      return this.name
    };
    

    innerFunction();

    return this.name
  };
}
let cosa = new User();
console.log(cosa.sayUser())

// Arrow functions should not be used

// constructor functions
// as prototype methods (if this word is included)
// Object methods (if this word is included)
// event handlers (if this word is included)
