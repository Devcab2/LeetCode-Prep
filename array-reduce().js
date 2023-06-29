// sometimes we need to convert a series of values to a single value, ex when we want to calculate the sum
// a classic way is using a loop

const miles = [33, 95, 79];
let total = 0;
for (const element of miles) {
  total += element;
}
console.log(total)


// javascript offers .reduce() which allows us to combine array values into a value using an inline function
// arrayName.reduce()
// to tell the .reduce() how to combine the values we first need to pass a function as a parameter
//reduce always takes 2 parameters

const miless = [33, 95, 79];
const totall = miless.reduce(function(prev, curr){
  return prev + curr;
});

console.log(totall);

// reduce() iterates through an array at each value performs an operation with the two parameters until it arrives at a single value
// the inline function returns the sum of the prev redution and curr value

//to simplify we can incorporate an arrow function inplace of the inline

// const total miles = miles.reduce((preVal, curVal) => preVal + curVal);

// if we include a 3rd parameter we can access each iterations index

const prices = [17.50, 20.25, 24.75, 13.50, 8.50];

const discountFactor = [0.9, 0.9, 1.0, 1.0, 0.9];

const sum = prices.reduce(function(pr, cr, i) {
  return pr + (cr * discountFactor[i]);
});

console.log(sum);


const v = [4, 3, 2, 1];
const f = v.reduce(function(p, c) {
  return p * c;
});
console.log(f);


const words = ["The", "house", "is", "red"];
const sentence = words.reduce(function(x, y) {
  return x + " " + y;
});

console.log(sentence);

// const total = prices.reduce((preval, curval) => preval + curval); 