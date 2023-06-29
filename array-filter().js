// suppose you want to find certain elements that meet a condition and extract them into a new array
// you could use a loop...

const textScores = [72, 95, 90, 71, 75, 79];
const arr = [];

for (const element of textScores) {
  if (element >= 90) {
    arr.push(element);
  }
}

console.log(arr);


// instead we can use .filter() this creates a new array with values that satisfy a condition. 
// arrayName.filter()

const arr2 = textScores.filter(function(element) {
  return element > 76;
});

console.log(arr2);

// give the inline function access to the arrays elements by adding a parameter to the function

// to tell the .filter() function which values to store in the new array the functions return statement must return a boolean

// typically we write aa conditional involving the element or index that results in a boolean 

// => example: const arr = textScores.filter(element => element >= 90);

const names = ["Tony", "Tanis", "Vinny", "Terry"];

const arrr = names.filter(element => (element[0] === "T"));

console.log(arrr);



const customerTotals = [99, 56, 78, 110, 29, 59];

const smallOrder = customerTotals.filter(i => (i < 60));

console.log(smallOrder);