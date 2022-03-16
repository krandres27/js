const multiply = (number, multiplier) => number * multiplier

function *myGenerator(init) {
  let value = init
  yield multiply(value, 3)
  yield `the last yielded value is ${multiply(value, 3)}`
  yield 1
}

const gen = myGenerator(4)

console.log(gen.next());
console.log(gen.next());
console.log(gen.return('3'));