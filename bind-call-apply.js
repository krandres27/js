const run = function(city) {
  return `${this.name}, is running in ${city}`;
}

const person1 = {
  name: 'Andrés'
}

const person2 = {
  name: 'Carlos'
}

const andresIsRunning = run.bind(person1, 'Bogotá');
console.log(andresIsRunning())
console.log(run.call(person1, 'Madrid'));
console.log(run.apply(person1, ['Paris']));
