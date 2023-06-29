// .map() allows us to modiify each value and then store it in a new arr.
// arrayName.map() syntax

const farenheit = [72, 68, 70, 74, 77, 75, 79];

const celsius = farenheit.map(function() {});

console.log(celsius)

//------------------------------------------>

const values = [56, 27, 19, 20, 38];

const evenOrOdd = values.map(function(element) {
  return (element % 2) == 0;
});

console.log(evenOrOdd);

//----------------------------------------->

// adding a second parameter allows us to access each itterations index along with the array values 
// well use index but any name can work

const queue = ["Sarah", "Hank", "Anna", "Beatrice"];
const displayQueue = queue.map(function(elem, index) {
  return index + ": " + elem;
});
console.log(displayQueue);


// "inline functions must return a value in order to store a value in the new array"

// arrow function example:

const states = ["ak", "md", "va", "ca", "or"];

const uppercaseStates = states.map((i) => i.toUpperCase());
console.log(uppercaseStates);


// we pass a function to tell .map() to tell it how to modify each element

// we pass the array values to .map() by adding a parameter to the inline function

// we can access the iteration index by including a second parameter to .map() inline function

// a return statement must be included to properly generate a new array of values.

// we can incorporate an => function to simplify the .map() functions syntax

// .map() works on arrays on any type


const nums = [1, 3, 4, 7];

const squared = nums.map(x => x * x);

console.log(squared);


const drivers = ["Callaway", "Titleist", "Taylormade"];

const position = drivers.map(function(d, p) {
  return p+1 + ". " + d;
});

console.log(position);