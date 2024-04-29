function createHelloWorld() {
  // Define a new function inside createHelloWorld
  function innerFunction(...args) {
      // This inner function always returns "Hello World"
      return "Hello World";
  }

  // Return the inner function
  return innerFunction;
}

// Example usage:
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"
console.log(f({}, null, 42)); // Output: "Hello World"

module.exports = createHelloWorld;