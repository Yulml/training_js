// JS examples
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
  case (exteriorTemp < 15):
    alert("Warm up");
    break;
  case (exteriorTemp <= 25):
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
/*

let isGreen = prompt("What color is the traffic light?").toLowerCase();
if (isGreen == "green") {
  console.log("Cross the road.");
} else {
  console.log("Please wait.");
}

*/

// Exercise 05
/*

let temp =  prompt("Is the temp 'Absolute Zero', 'Freezing point', 'Body Temperature' or 'Boiling point'?").toLowerCase();

switch (temp) {
  case "absolute zero":
    console.log((-273.15 * 9  / 5 + 32).toFixed(2));
    break;
  case "freezing point":
    console.log(32);
    break;
  case "body temperature":
    console.log((37 * 9  / 5 + 32).toFixed(2));
    break;
  case "boiling point":
    console.log((100 * 9  / 5 + 32).toFixed(2));
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
    alert("$" + quantity + " converts to €" + quantity * 0.90743587);
    console.log(`$${quantity} converts to €`,quantity * 0.90743587);
    break;
  case "JPY":
    alert("¥" + quantity + " converts to  €" + quantity * 0.0075983216);
    console.log(`¥${quantity} converts to €`,quantity *  0.0075983216);
    break;
  case "GBP":
    alert("£" + quantity + " converts to  €" + quantity * 1.1944347);
    console.log(`£${quantity} converts to €`,quantity * 1.1944347);
    break;
  case "CHF":
    alert("CHF" + quantity + " are  €" + quantity * 0.97247474);
    console.log(`CHF${quantity} converts to €`,quantity * 0.97247474);
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
  "Do you want to do 'add', 'subtract', 'multiply' or 'divide'?"
).toLowerCase();

switch (op) {
  case "add":
    console.log(parseFloat(numOne) + parseFloat(numTwo));
    break;
  case "subtract":
    console.log(parseFloat(numOne) - parseFloat(numTwo));
    break;
  case "multiply":
    console.log(parseFloat(numOne) * parseFloat(numTwo));
    break;
  case "divide":
    console.log(parseFloat(numOne) / parseFloat(numTwo));
    break;

  default:
    console.log("Not a valid operator.");
    break;
}
*/

// Exercise 09
/*
// Exercise 9
// let data = prompt("Please enter DNI or NIE:");
// //Verify data length
// if (data.length == 9) {
//   // checking if data begins by T or X
//   if (data.charCodeAt(0) == 84 || data.charCodeAt(0) == 88) {
//     // Checking if the last char is a letter too
//     if (
//       // data.charCodeAt(data.length - 1) >= 65 &&
//       // data.charCodeAt(data.length - 1) <= 90
//       // Jorge solution
//       65 <=
//       data.charCodeAt(data.length - 1) <=
//       90
//     ) {
//       // Checking if the other part of the string is fullfilled by numbers
//       if (
//         data.charCodeAt(1) >= 48 &&
//         data.charCodeAt(1) <= 57 &&
//         data.charCodeAt(2) >= 48 &&
//         data.charCodeAt(2) <= 57 &&
//         data.charCodeAt(3) >= 48 &&
//         data.charCodeAt(3) <= 57 &&
//         data.charCodeAt(4) >= 48 &&
//         data.charCodeAt(4) <= 57 &&
//         data.charCodeAt(5) >= 48 &&
//         data.charCodeAt(5) <= 57 &&
//         data.charCodeAt(6) >= 48 &&
//         data.charCodeAt(6) <= 57 &&
//         data.charCodeAt(7) >= 48 &&
//         data.charCodeAt(7) <= 57
//       ) {
//         console.log("valid NIE");
//       } else {
//         console.log("Please, check your NIE");
//       }
//     }
//     // if NIE fails, then check the DNI
//   } else if (
//     data.charCodeAt(0) >= 48 &&
//     data.charCodeAt(0) <= 57 &&
//     data.charCodeAt(1) >= 48 &&
//     data.charCodeAt(1) <= 57 &&
//     data.charCodeAt(2) >= 48 &&
//     data.charCodeAt(2) <= 57 &&
//     data.charCodeAt(3) >= 48 &&
//     data.charCodeAt(3) <= 57 &&
//     data.charCodeAt(4) >= 48 &&
//     data.charCodeAt(4) <= 57 &&
//     data.charCodeAt(5) >= 48 &&
//     data.charCodeAt(5) <= 57 &&
//     data.charCodeAt(6) >= 48 &&
//     data.charCodeAt(6) <= 57 &&
//     data.charCodeAt(data.length - 1) >= 65 &&
//     data.charCodeAt(data.length - 1) <= 90
//   ) {
//     console.log("valid DNI");
//   } else {
//     console.log("Please, check your DNI");
//   }
// } else {
//   console.log("Please enter valid data");
// }

// // Fran solution
// let userNieDni = prompt("Please, write your DNI or NIE");
// if (userNieDni.length == 9) {
//   let firstCharacter = userNieDni.charCodeAt(0);
//   let lastCharacter = userNieDni.charCodeAt(userNieDni.length - 1);
//   //if NIE
//   if (
//     (firstCharacter == 84 || firstCharacter == 88) &&
//     !isNaN(userNieDni.substring(1, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your NIE is valid");
//   }
//   // if DNI
//   else if (
//     !isNaN(userNieDni.substring(0, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your DNI is valid");
//   } else {
//     console.log("Your DNI or NIE is not valid");
//   }
// } else {
//   console.log("Your DNI or NIE is not valid");
// }

// Kay solution
//Comprobador de DNI
// let identificacion = prompt(
//   "¿Se va a registrar con el DNI o con el NIE?"
// ).toUpperCase();
// switch (identificacion) {
//   case "DNI":
//     var DNI = prompt("Introduzca su DNI");
//     if (
//       DNI.charCodeAt(0) >= 48 &&
//       DNI.charCodeAt(0) <= 57 &&
//       DNI.charCodeAt(1) >= 48 &&
//       DNI.charCodeAt(1) <= 57 &&
//       DNI.charCodeAt(2) >= 48 &&
//       DNI.charCodeAt(2) <= 57 &&
//       DNI.charCodeAt(3) >= 48 &&
//       DNI.charCodeAt(3) <= 57 &&
//       DNI.charCodeAt(4) >= 48 &&
//       DNI.charCodeAt(4) <= 57 &&
//       DNI.charCodeAt(5) >= 48 &&
//       DNI.charCodeAt(5) <= 57 &&
//       DNI.charCodeAt(6) >= 48 &&
//       DNI.charCodeAt(6) <= 57 &&
//       DNI.charCodeAt(7) >= 48 &&
//       DNI.charCodeAt(7) <= 57 &&
//       DNI.charCodeAt(8) >= 65 &&
//       DNI.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your DNI number is incorrect");
//     }
//     break;
//   case "NIE":
//     var NIE = prompt("Introduzca su NIE");
//     if (
//       (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
//       NIE.charCodeAt(1) >= 48 &&
//       NIE.charCodeAt(1) <= 57 &&
//       NIE.charCodeAt(2) >= 48 &&
//       NIE.charCodeAt(2) <= 57 &&
//       NIE.charCodeAt(3) >= 48 &&
//       NIE.charCodeAt(3) <= 57 &&
//       NIE.charCodeAt(4) >= 48 &&
//       NIE.charCodeAt(4) <= 57 &&
//       NIE.charCodeAt(5) >= 48 &&
//       NIE.charCodeAt(5) <= 57 &&
//       NIE.charCodeAt(6) >= 48 &&
//       NIE.charCodeAt(6) <= 57 &&
//       NIE.charCodeAt(7) >= 48 &&
//       NIE.charCodeAt(7) <= 57 &&
//       NIE.charCodeAt(8) >= 65 &&
//       NIE.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your NIE number is incorrect");
//     }
//     break;
//   default:
//     alert("Incorrect option");
// }
*/
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

//Extra exercise
/*

let grade = prompt("Pleae, enter your grade");

switch (parseInt(grade)) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Failure");
    break;

  case 5:
    console.log("Passed");
   break;
  case 6:
    console.log("Well");
    break;
  case 7:
  case 8:
    console.log("Remarkable");
    break;
  case 9:
  case 10:
    console.log("Outstanding");
    break;
  default:
    console.log("Not a valid grade");
    break;
}
*/

// LOOPS

//counting by one to one

// WHILE
/*
let count = 0;

while (count <= 10) {
  console.log(count);
  count++;
}
*/

//FOR

/*
let end = 10;
for (let start = 1; start <= end; start++) {
  console.log(start + " out of " + end);
}
*/


/*
let userValue = prompt("Please enter your value");

for (let num = 1; num <=10; num++) {
  console.log(`${userValue} x ${userValue} = ${userValue*num}`);  
}

*/