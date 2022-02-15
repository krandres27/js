class Person {
  type = 'human'
  talk() {
    return 'talking';
  }
}

class Man extends Person {
  _genre = 'M'
  getGenre() { return this._genre }
}

const andres = new Man();

class Asian extends Man {
  // extending and overriding 
  talk() {
    return 'Im talking inside Asian class'
  }
}

const carlos = new Asian()
console.log(carlos.__proto__)
// __proto__ is a reference to the parent object where it
// is inheriting from

console.log(carlos.prototype)
// this prototype property would be undefined because it
// doesn' belong to any object or instance
// it only bellongs to constructor functions or 'classes'
