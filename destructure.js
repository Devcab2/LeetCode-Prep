// send attendees as a destructured param for getScholarshipsQty

const conferenceInformation = {
  attendees: 200,
  location: "6203 North 100st",
  days: 3,
};

function getScholarshipsQty({ attendees }) {
  const scholarshipsQty = attendees * 0.1;
  console.log(`The scholarships quantity are ${scholarshipsQty}.`);
}

getScholarshipsQty(conferenceInformation);

// we planned a list of fabulous clothes and need to print it, destructure the array and store its elements in variables top, bottom, outerwear, footwear. keep the order inside [] then console.log each variable

const [top, bottom, outerwear, footwear] = ["Baseball top", "kilt", "Blazer", "Boots"];

console.log(top);
console.log(bottom);
console.log(outerwear);
console.log(footwear);


const [berryTea, ...otherTeas] = ['Berry', 'Chai', 'Chamomile', 'Citrus', 'Fruity'];

console.log(`The ${berryTea} tea has Sun-proofing and Nourishing effects.`);
console.log(otherTeas);

// In our neighbor's bakery, we have different types of bread. This time we need to choose the  F⁠o⁠c⁠a⁠c⁠c⁠i⁠a⁠  to print an informative sentence that'll make this bread sell like hot cakes! Extract and store this value in the variable  i⁠t⁠a⁠l⁠i⁠a⁠n⁠B⁠r⁠e⁠a⁠d⁠ , then use it in the  c⁠o⁠n⁠s⁠o⁠l⁠e⁠.⁠l⁠o⁠g⁠ .

const [, , , italianBread ,] = ['Sourdough', 'Baguette', 'Brioche', 'Focaccia',
 'Multigrain'
];
console.log(
 `${italianBread} is leavened bread that produces a fluffy appearance.`);



 const aircrafts = {
  brand: 'Boeing',
  nose: 'Pointed nose',
  windshield: 'V-shaped windshield',
  tail: 'Sloped Tail',
 };

 const {brand, nose, windshield, tail} = aircrafts;

 console.log(`The ${brand} Company was founded on July 15, 1916.`);
 console.log(`This aircraft has a ${nose}, and a ${windshield}`);
 console.log(`And at least but not last a ${tail}`);


// We need to check the  s⁠m⁠a⁠r⁠t⁠T⁠V⁠  properties before going to the mall and buying a new one. When looking at the property names, the first two are too general to be useful; so let's change  t⁠y⁠p⁠e⁠  for  s⁠c⁠r⁠e⁠e⁠n⁠T⁠y⁠p⁠e⁠  and  s⁠h⁠a⁠p⁠e⁠  for  s⁠c⁠r⁠e⁠e⁠n⁠S⁠h⁠a⁠p⁠e⁠  in the object destructuring


const smartTV = {
  type: "QLED",
  shape: "Flat",
  ports: "HDMI",
  connectivity: 'Wi-Fi'
};

const { type: screenType, shape: screenShape, ports, connectivity } = smartTV;

console.log(screenType); // Output: QLED
console.log(screenShape); // Output: Flat
console.log(ports); // Output: HDMI
console.log(connectivity); // Output: Wi-Fi


//We have an object with the best TV Shows per decade. We want to store the  e⁠i⁠g⁠h⁠t⁠i⁠e⁠s⁠  property but keep the remaining properties in  o⁠t⁠h⁠e⁠r⁠O⁠l⁠d⁠S⁠h⁠o⁠w⁠s⁠ . Add these variables to object destructuring, and include  e⁠i⁠g⁠h⁠t⁠i⁠e⁠s⁠  in the first  c⁠o⁠n⁠s⁠o⁠l⁠e⁠.⁠l⁠o⁠g⁠ . 

const oldShows = {
  fifties: "Maverick",
  sixties: "The Saint",
  seventies: "The Love Boat",
  eighties: "Manimal",
  nineties: "Dawson's Creek"
};

const { eighties, ...otherOldShows } = oldShows;

console.log(`The best TV show in the 80s was ${eighties}`);
console.log(otherOldShows);


// The beer world is fascinating with all the different types and the considerable quantity we can find. We have an object with information about a specific beer. It's necessary to set a default value for the  b⁠r⁠a⁠n⁠d⁠  property because it is missing in  b⁠e⁠e⁠r⁠ . Set  "⁠N⁠/⁠A⁠"⁠  as the default value for  b⁠r⁠a⁠n⁠d⁠  in the object destructuring. Then print  b⁠r⁠a⁠n⁠d⁠ .

const beer = {
  name: 'Blue Moon White',
  alcoholPercentage: 5.4,
  calories: 171,
  carbs: 12.9
};

const { brind = "N/A" } = beer;

console.log(brind);


// Destructure the first two items of  m⁠o⁠u⁠n⁠t⁠a⁠i⁠n⁠s⁠  as parameters for   g⁠e⁠t⁠M⁠o⁠u⁠n⁠t⁠a⁠i⁠n⁠s⁠N⁠i⁠c⁠k⁠n⁠a⁠m⁠e⁠ . Use the variable names  a⁠l⁠p⁠s⁠  and  l⁠o⁠g⁠a⁠n⁠ . Then, print them inside the function in the same order.     

const mountains = ["Swiss Alps", "Mount Logan", "Mount Fuji", "Mauna Kea", "Jotunheimen Mountains"];

function getMountainsNickname([alps, logan]) {
  console.log(`The ${alps} are The Magical Mountains.`);
  console.log(`The ${logan} is The Snowy Paradise.`);
}

getMountainsNickname(mountains);


// a hotel chain needs to display a welcome message to guests on their new outdoor displays. write an arrow function that returns a welcome message similar to the example below you may choose your own welcome message as long as it is a string. ex: Hello! Welcome to Terrace Inn & Suites! function should be named checkInMessage that returns the provided welcome message. click on the welcome message to copy it and then paste it as a string thats returned by the arrow function.

const challengeGreeting = (name) => {
  let generalMessage = `Hello, ${name}! Welcome to Terrace Inn & Suites!`;
  let seasonalMessage = "Need to cool off? Visit one of our three resort pools!";

  return `${generalMessage} ${seasonalMessage}`;
};

console.log(challengeGreeting("Sarah"));




