// create a function that takes two arguments and displays the result of a calculation 
// create a fuelCost function that takes 2 args, litres and costPerLitre
// within that function create a totalCost variable = litres * costPerLitre
// still within display the value of totalCost
// outside call the func with values of 60 and 1.44 for litres and cost respectively.

function fuelCost(litres, costPerLitre) {
  const totalCost = litres * costPerLitre;
  console.log(totalCost);
}

fuelCost(60, 1.44);



// lets create a function that returns a value and then write some code to display that value
// create a milesToKm() function which takes 1 param miles
// inside create a km variable = ((miles / 5) * 8)
// write a return statement at the end to return the value of km
// display the result by calling it with a vaule of 70

function milesToKm(miles) {
  const km = (miles / 5) * 8;
  return km;
}

const result = milesToKm(70);
console.log(result);


//lets create a function that returns a string once a condition is met.
//we want to return a message that tells us based on the info provided, wether there is not enough stock for all users
//for some users, or any other users

//complete the function defintion by adding code on each side of the two > operators to return the correct statement
// in the if statement check wether minPerUser is greater than totalAvailable(there isnt enough stock for even one user)
// in the else if statement check wether groupSize * minPerUser is greater than totalAvailable(there isnt enough stock for all users)
//display the result of calling the function using the parameters group, total, and minimum

const group = 4;
const total = 500;
const minimum = 150;

function stockCheck (groupSize, totalAvailable, minPerUser) {
  if ( minPerUser > totalAvailable ) {
    return "Insufficient for one user";
  } else if ( groupSize * minPerUser > totalAvailable ) {
    return "Insufficient for all users";
  } else {
    return "Sufficient for all users";
  }
}

const resultt = stockCheck(group, total, minimum)
console.log(resultt);