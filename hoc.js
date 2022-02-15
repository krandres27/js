// Higher Order Functions

// It is a functions that takes another function as a parameter
// or returs a function

setTimeout(() => {
  console.log('setTimeout is a HOC, it receives a function as a param')
}, 100);

[1, 2].filter(item => {
  console.log('Array.filter is another HOC, it receives a function as a param')
  return item > 1
})

function makeClickHandler() {
  console.log('makeClickHandler is another HOC, it returns a function')
  return function() {
    document.body.style.fontSize = `${size}px`
  }
}

const onClick12 = makeClickHandler(12)
const onClick16 = makeClickHandler(16)

// later those functions can be called
onClick12()
onClick16()
