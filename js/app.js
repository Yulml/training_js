// JS exercises.
// We will comment the code for every
// excersize that isn't the one we want to check.

// Exercise 01
/*
 function getDaysInCurrentMonth() {
  let currentDate = new Date();

  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
}

let result = getDaysInCurrentMonth();
console.log("This month has " + result + "days.");

*/

// Exercise 02

/*
let actualMonth = prompt("Please enter your month");

if (actualMonth == "January" || actualMonth == "january" || actualMonth == "March" || actualMonth == "march" || actualMonth == "May" || actualMonth == "may" || actualMonth == "July" || actualMonth == "july" || actualMonth == "August" || actualMonth == "august" || actualMonth == "October" || actualMonth == "october" || actualMonth == "December" || actualMonth == "december") {
  console.log("This month has 31 days.");
} else if (actualMonth == "April" || actualMonth == "april" || actualMonth == "June" || actualMonth == "june" || actualMonth == "September" || actualMonth == "september" || actualMonth == "November" || actualMonth == "november") {
  console.log("This month has 30 days.");
} else if (actualMonth == "February" || actualMonth == "february") {
  console.log("This month has 28 days in a regular year.");
} else {
  console.log("That's not a real month.");
}
*/

// Exercise 02-2
/*
let actualMonth = prompt("Please enter your month");

switch (actualMonth.toLowerCase()) {
  case "january":
    console.log("January has 31 days");
    break;
  case "february":
    console.log("February has 28 days");
    break;
  case "march":
    console.log("March has 31 days");
    break;
  case "april":
    console.log("April has 30 days");
    break;
  case "may":
    console.log("May has 31 days");
    break;
  case "june":
    console.log("June has 30 days");
    break;
  case "july":
    console.log("July has 31 days");
    break;
  case "august":
    console.log("August has 31 days");
    break;
  case "september":
    console.log("September has 30 days");
    break;
  case "october":
    console.log("October has 31 days");
    break;
  case "november":
    console.log("November has 30 days");
    break;
  case "december":
    console.log("December has 31 days");
    break;
  default:
    console.log("That's not a real month.");
}
*/

// Exercise 03
/*
let exteriorTemp = prompt("Please enter the exterior temperature");

switch (true) {
  case (exteriorTemp < "15"):
    alert("Warm up");
    break;
  case (exteriorTemp > 15 && exteriorTemp <= 25):
    alert("Enjoy the weather!");
    break;
  case (exteriorTemp > 25):
    alert("Cool down");
    break;

  default:
    alert("Not a valid temperature input.");
    break;
}
*/

// Exercise 04

/* let isGreen = prompt("What color is the traffic light?");

if (isGreen == "Green" || isGreen == "green") {
  console.log("Cross the road.");
} else {
  console.log("Please wait.");
}

*/

// Exercise 05

/*
let temp =  prompt("Is the temp 'Absolute Zero', 'Freezing point', 'Body Temperature' or 'Boiling point'?");

switch (true) {
  case temp == "Absolute Zero":
    console.log(-273.15*9/5+32);
    break;
  case temp == "Freezing point":
    console.log(32);
    break;
  case temp == "Body Temperature":
    console.log(37*9/5+32);
    break;
  case temp == "Boiling point":
    console.log(100*9/5+32);
    break;
    default:
    console.log("Not a valid temp");
}
*/

// Exercise 06
/*
let email = prompt("Please insert your email");
let password = prompt("Please insert your password");

if (email == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY") {
  alert("Welcome Mr. Tolkien");
} else {
  alert("Wrong password or username");
}
*/

// Exercise 07
/*
let currency = prompt("Type your currency ('USD, JPY, GBP or CHF");
let quantity = prompt("Please insert your quantity of such currency");

switch (currency) {
  case "USD":
    alert("$" + quantity + " are €" + quantity * 0.90743587);
    break;
  case "JPY":
    alert("¥" + quantity + " are  €" + quantity * 0.0075983216);
    break;
  case "GBP":
    alert("£" + quantity + " are  €" + quantity * 1.1944347);
    break;
  case "CHF":
    alert("CHF" + quantity + " are  €" + quantity * 0.97247474);
    break;
  default:
    alert("Not a valid currency.");
    break;
}
*/
// Exercise 08
/*
let numOne = prompt("Insert the first number");
let numTwo = prompt("Insert the second number");
let op = prompt(
  "Do you want to do 'add', 'substract', 'multiply' or 'divide'?"
);
let result = "";

switch (true) {
  case op == "add":
    result = numOne + numTwo;
    console.log(result);
    break;
  case op == "substract":
    result = numOne - numTwo;
    console.log(result);
    break;
  case op == "multiply":
    result = numOne * numTwo;
    console.log(result);
    break;
  case op == "divide":
    result = numOne / numTwo;
    console.log(result);
    break;

  default:
    console.log("Not a valid operator. It is case sensitive.");
    break;
}
*/

// Exercise 09

let idDoc = prompt(
  "Insert your ID card number. If it's a NIE remember to put the initial X or T. If it's a DNI it must be formed by 8 digits and an alphabetic character at the end as a control value."
);
idDoc = idDoc.toUpperCase();

if (
  (idDoc.charCodeAt(0) >= 48 && idDoc.charCodeAt(0) <= 57) ||
  (idDoc.charCodeAt(0) == 84 || idDoc.charCodeAt(0) == 88) &&
    idDoc.charCodeAt(1) >= 48 &&
    idDoc.charCodeAt(1) <= 57 &&
    idDoc.charCodeAt(2) >= 48 &&
    idDoc.charCodeAt(2) <= 57 &&
    idDoc.charCodeAt(3) >= 48 &&
    idDoc.charCodeAt(3) <= 57 &&
    idDoc.charCodeAt(4) >= 48 &&
    idDoc.charCodeAt(4) <= 57 &&
    idDoc.charCodeAt(5) >= 48 &&
    idDoc.charCodeAt(5) <= 57 &&
    idDoc.charCodeAt(6) >= 48 &&
    idDoc.charCodeAt(6) <= 57 &&
    idDoc.charCodeAt(7) >= 48 &&
    idDoc.charCodeAt(7) <= 57 &&
    idDoc.charCodeAt(8) >= 65 &&
    idDoc.charCodeAt(8) <= 90 &&
    idDoc.length == 8
) {
  alert("Your ID is valid");
} else {
  alert("Your ID is not valid");
}

if (idDoc.charCodeAt(0) == 84 || idDoc.charCodeAt(0) == 88) {
  alert("");
}

if (
  idDoc.charCodeAt(idDoc.length - 1) >= 65 &&
  idDoc.charCodeAt(idDoc.length - 1) <= 90
) {
}

let endChar = idDoc.charAt(idDoc.length - 1);

console.log();

// Exercise 10
/*
let randNum1 = Math.floor(Math.random() * 6) + 1;
let randNum2 = Math.floor(Math.random() * 6) + 1;
console.log("First number is " + randNum1 + " and second number is " + randNum2);

switch (true) {
  case randNum1>randNum2:
    console.log("Player 1 wins!");
    break;

    case randNum1<randNum2:
    console.log("Player 2 wins!");
    break;

  default:
    console.log("draw");
    break;
}
*/
