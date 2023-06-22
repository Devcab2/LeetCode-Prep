//In each loop iteration, multiply the current item in the prices array by thr current item in the discounts array. save the result at the current index in the values array

const prices = [100, 150, 200];
const discounts = [0.1, 0.2, 0.25];

function getValues(prices, discounts) {
  let values = [];
  for (let i = 0; i < prices.length; i++) {
    values[i] = prices[i] * discounts[i];
  }
  console.log(values);
}
getValues(prices, discounts);



// ----------------------------------->

// double the value at each iteration

const numbers = [1, 2, 3, 4, 5];

function double(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
  }
}

double(numbers);