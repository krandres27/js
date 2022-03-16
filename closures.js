// Esentially a closure has this structure

function outerFunction(age) {
  const name = 'Andrés'
  function innerFunction(city) {
    return `The variables that I captured were ${name},${age} and ${city}`
  }

  return innerFunction
}

// A function inside another function, but the inner function
// has the ability to remember the outer function scope
// event after creation time.

// so now I can use the outerFunction to set the closure
// it will remember the name variable, and also I can 
// use the age param to be used inside the closure
const andresWith30 = outerFunction(30)
console.log(andresWith30())

// now I can also use the returned closure to invoque it
// again, with it remembering its creation scope
// but aslo addin a new variable avaiable to be included
console.log(andresWith30('Bogotá'))

(() => {
  var x, y;
  var a = 'hola';

  try {
    throw new Error();
  } catch (x) {
    x = 1, y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(a);
  console.log(y);
})();