"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive: D");

// Functions

// function logger() {
//   console.log("My name is Abas");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// // Function Declaration
// function calcAge1(bithYear) {
//   const age = 2037 - bithYear;
//   return age;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow Functions
// const caclAge3 = (birthYear) => 2037 - birthYear;
// console.log(caclAge3(1991));

// One/two Parameter/s and msny lines of code

// const yearsUnitillRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   //return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUnitillRetirement(1991, "Bob"));

//Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apple, oranges) {
//   const applePieces = cutFruitPieces(apple);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Recap
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUnitillRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired🎉`);
//   }
//   return -1;

//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUnitillRetirement(1991, "Bob"));
// console.log(yearsUnitillRetirement(1970, "Mike"));

// CHALLANGE 5 - Functions

// const calcAverage = (score1, score2, score3) => {
//   const avg = (score1 + score2 + score3) / 3;
//   return avg;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas > avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log("No team wins");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// Arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); //know the length
// console.log(friends[friends.length - 1]); //get the last value of the array

// // Change the value in position 2 in ana array
// friends[2] = "Tindel";
// console.log(friends);

// // Holding diffrent values in a single array
// const tindel = ["William", "Tindel", 2037 - 1991, "teacher", friends];
// console.log(tindel);

// Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

//////////////////////////////////////////////////
// Array Methods
// Push - adds elements at the end of the array/gets the length of the new array
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Hera");
// console.log(friends);
// console.log(newLength);

// Unshift - add elements at the begining of an array
// friends.unshift("Chela");
// console.log(friends);

// // Remove Elements
// // pop
// friends.pop();
// console.log(friends);

// // shift
// friends.shift();
// console.log(friends);

// // Getting indexOf an element.
// console.log(friends.indexOf("Peter"));
// console.log(friends.indexOf("Chela"));

// //Checks if an element is available in the array returns true if present and false if absent - uses strict equality, used to write conditions
// friends.includes("Steven");
// friends.includes("Chela");

// if (friends.includes("Peter")) {
//   console.log("I have a friend");
//}

///////////////////////////////////////////
// #CHALLANGE 2

// const calcTip = function (bill) {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//   } else {
//     tip = bill * 0.2;
//   }

//   return tip;
// };

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(tips, total);

// ///////////////////////////////////////
// Introduction to Objects
// const jonasArray = [
//   "Jonas",
//   "Schmedman",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // Used to give key value pairs
// const jonas = {
//   firstName: "jonas",
//   lastName: "Schmedman",
//   job: "teacher",
//   age: 2037 - 1991,
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// // getting property from an object
// console.log(jonas.lastName);  /dot notation
// console.log(jonas["lastName"]);  //bracket notation

// // one can use expressions while using bracket notation
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // Example age

// const intrestedIn = prompt(
//   "What do you want to know about jonas? Choose between firstName, lastName, age, job and friends "
// );

// console.log(jonas[intrestedIn]);

// if (jonas[intrestedIn]) {
//   console.log(jonas[intrestedIn]);  //After the user inputs their choice, the code checks whether the input corresponds to a valid property in the jonas object.
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends "
//   );
// }

// //Adding properties to the object

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";

// console.log(jonas);

// // Challange
// // Jonas has 3 friends, and his best friend is called Michael

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]} `
// );

///////////////////////////////////////////////////

// Object Methods  -  functions inside an object
// const jonas = {
//   firstName: "jonas",
//   lastName: "Schmedman",
//   job: "teacher",
//   birthYear: 1991,
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // Using this(represents the entire object) Keyword
//   // calcAge: function () {
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} - year old ${
//       jonas.job
//     } and he has ${this.hasDriversLicense ? "a" : "no"} drivers licesnse`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // console.log(jonas["calcAge"](jonas.birthYear));

// // Challange
// // 'Jonas is a 46-year old teacher and he has a drivers license'

// console.log(jonas.getSummary());

////////////////////////////////////
// CHALLANGE 3
// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// // calculating BMI for both mark and john
// mark.calcBMI();
// john.calcBMI();

// // Compare their BMIs and log the result

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`
//   );
// }

// ///////////////////////////////////////////
// Iteration: The for loop
// console.log("Lifting weights repetition 1🏋🏾");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}🏋🏾`);
// }

// //Looping arrays: Breaking and Continuing.

// const jonas = [
//   "Jonas",
//   "Schmedman",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// // logging all elements to the array
// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue(exit current iterarion and continue to the next one) and break

// console.log("---ONLY STRINGS ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue; // prints elements that are strings
//   console.log(jonas[i], typeof jonas[i]);
// }

// // break
// console.log("---BREAKS WITH NUMBER ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break; //exits loop when a number is found
//   console.log(jonas[i], typeof jonas[i]);
// }

//////////////////////////////////////////
//Looping backwards and nested loops
// const jonas = [
//   "Jonas",
//   "Schmedman",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// Nested loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋🏾`);
//   }
// }

//////////////////////////////////////////////
//While Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}🏋🏾`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}🏋🏾`);
// }
// rep++;

// rolling dice
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice===6) console.log('Loop is about to end...')
}



//////////////////////
// CHALLANGE - Last Fundamentals challange.
const bills = [
  22,
  295,
  176,
  440,
  37,
  105,
  10,
  1100,
  86,
  52
]
const tips = []
const totals = []

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };


for(let i = 0; i <=bills.length; i++  ){
  const bill = bills[i];
  const tip = calcTip(bill);
  const total = tip + bill;

  tips.push(tip);
  totals.push(total)
}


console.log(`Bills:`, bills)
console.log(`Tips:`, tips)
console.log(`Totals:`, totals)


// Bonus Challange.
const arr =[
  22,
  295,
  176,
  440,
  37,
  105,
  10,
  1100,
  86,
  52
]


const calcAverage = function(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++ ){
  
    sum += arr[i]
  }
  const average = sum/arr.length;
  return average;
}

console.log(calcAverage(arr))


