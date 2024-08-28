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

// CHALLANGE 5 Ex1

const calcAverage = (score1, score2, score3) => {
  const avg = (score1 + score2 + score3) / 3;
  return avg;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
