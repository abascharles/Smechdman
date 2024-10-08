/*
let js = "amazing";
console.log(48 + 8 + 23 - 10);

// Values and Variables

console.log("Jonas");
console.log(23);

// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//Assignment One
//1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
// 2. Log their values to the console 

let country = "Kenya";
let continent = "Africa";
let population = 53;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
// Boolean

let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof operator - used to see the type of a value
console.log(typeof true);
console.log(typeof "Abas");

// Dynamic Typing
javascriptIsFun = "YES!";
console.log(javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

//let, const and var
// let - used to declare variables that can be changed
let age = 30;
age = 31;
console.log(age);

// const -used to declare variables that cannot be changed
const birthYear = 2000;
// birthYear = 2001;

// var - used to declare variables in the old way - just works the same as let keyword.

//Basic Operators
// Math Operators
const now = 2037;
const ageAbas = now - 1991;
const ageSarah = now - 2018;
console.log(ageAbas, ageSarah);

console.log(ageAbas * 2, ageAbas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

// String Concatenation
const firstName = "Abas";
const lastName = "Kassim";

const fullName = firstName + " " + lastName;
console.log(fullName);

// Assignment Operators = += -= *= /=
let x = 10 + 5;
x += 10;
x += 6;
x--;
x++;
console.log(x);

// Comparison operators
console.log(ageAbas <= ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18; //isFullAge holds the boolean value of the comparison



const now = 2037;
const ageAbas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// Operator Precedence
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

// Coding Challenge #1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);


// Strings and Template Literals
const firstName = "Abas";
const job = "Software Developer";
const birthYear = 1991;
const year = 2037;
let age = year - birthYear;

const abas = `I'm ${firstName} a ${age} year old ${job}!`;
console.log(abas);

// Multiple line string using template literals
console.log(`String
    with
    multiple lines`);
    

// Taking decisions
// if else Statements
const age = 17;

if (age >= 18) {
  console.log("Sarah can start driving License 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

// Global and local variable
const birthYear = 2008;
let centuary;

if (birthYear <= 2000) {
  centuary = 20;
} else {
  centuary = 21;
}

console.log(centuary);  

// Coding Challange 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Part 1
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}


//Type Conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(String(23));

//Type Coersion
console.log();


// Truthy and Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Abas"));
console.log(Boolean({}));

// Example
let money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}


// Equality Operators: ==vs===
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)"); //does not do type coersion.(ensures that the 'age' must be both the same type and value as 18)
if (age == 18) console.log("You just became an adult :D (loose)"); //does type coersion  - avoid while comparing values.

// Getting value from user

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an ama23zing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) {
  console.log("Why not 23?");
}


// Boolean logic/ logic operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (shouldDrive) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false;

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

console.log(hasDriversLicense || hasGoodVision || isTired);

if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

//Coding Challange 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}


// The Switch statement
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;

  default:
    console.log("Not a valid Day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || _day === "thursady") {
  console.log("Write code examples");
}


//Conditional(tenary) Operator

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine🍷" : "water 💧";
console.log(drink);

// Usage inside template literals
console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);


*/
// Challange 4
let bill = 275;
let tip;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was${tip}, and the total value ${bill + tip}`
);
