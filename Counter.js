function counter(n) {
  let count = n; // init count with n
  return function increment() {
      return count++; // return. count and then increment it by 1
  };
}

// test cases
// const n1 = 10;
// const counterFunc1 = counter(n1);
// const output1 = ["call", "call", "call"].map(() => counterFunc1());
// console.log(output1); // output: [10, 11, 12]

// const n2 = -2;
// const counterFunc2 = counter(n2);
// const output2 = ["call","call","call","call","call"].map(() => counterFunc2());
// console.log(output2); // Output: [-2, -1, 0, 1, 2]

module.exports = counter;