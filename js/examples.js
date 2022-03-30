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

// DO while

//interactive menu for hex colors

/*
let option = null;
let colors = ["red", "green", "blue"];
do {
  console.log("Please, choose a color");
  for (let index = 0; index < colors.length; index++) {
    console.log(index + 1 + " " + colors[index]);
  }
  console.log("Press 0 to leave");
  option = prompt("Make your choice");
  switch (option) {
    case "1":
      console.log("%cHex code for red: #FF0000", "color:#FF0000");
      break;
    case "2":
      console.log("%cHex code for green: #008000", "color:#008000");
      break;
    case "3":
      console.log("%cHex code for blue: #0000FF", "color:#0000FF");
      break;

    default:
      console.log("%cExiting, see you soon!");
      break;
  }
} while (option != null && option != "0");
*/
/*
// Object literal syntax
let star = {
  name: "Polaris",
  constellation: "Ursa Minor",
  type: "Double/Cepheid",
  spectralClass: "F7",
  mag: 2.0,
};

// Escribe un objeto person, que contenga, nombre, apellidos,
// edad, dirección{tipoVia, nombreVia, num, cp,localidad},telefono

let person = {
  name: "John",
  lastName: "Doe",
  age: 30,
  address: {
    streetType: "Boulevard",
    streetName: "Larios",
    num: 53,
    cp: 54321,
    location: "Málaga",
  },
  phone: "+34 678 543 210",
};

person.address.location = "Madrid";
console.log(person);

person.phone = {
  1: "+34 678 543 210",
  2: "+34 678 543 211",
  3: "+34 678 543 212",
};

console.log(person);

// Crear un objeto llamado login con las propiedades y valores respectivamente.
// id => Un número hexadecimal
// state => {logged => verdadero o falso, onLine => verdadero o falso}
// userName => "nombre"
// loginAt: => fecha y hora

let login = {
  id: "0afbc357de69f",
  state: {
    logged: false,
    onLine: false,
  },
  userName: "Jane",
  loginAt: "2022/03/28 18:15:30",
};
*/
// Modifica el objeto person, para que incluya un email y una contraseña
// Una vez hechos los cambios, pide por prompt ambos datos y modifica el objeto login
// según estos datos sea o no correctos.
// alert de bienvenida refiriendo el nombre

// person.email = "john@doe.com";
// person.password = "1234";
// console.log(person);
// let userEmail = prompt("Please, enter your email:");
// let userPass = prompt("Please, enter your password:");

// if (userEmail == person.email && userPass == person.password) {
//   login.state.logged = true;
//   login.state.onLine = true;
//   let loginInfo = new Date();
//   let year = loginInfo.getFullYear();
//   let month = loginInfo.getMonth()+1;
//   let day = loginInfo.getDate();

//   let hour = loginInfo.getHours();
//   let minutes = loginInfo.getMinutes();
//   let seconds = loginInfo.getSeconds();
//   // loginAt: "2022/03/28 18:15:30",
//   let completeDate = `${year}/`;
//   if (month < 10) {
//     completeDate += `0${month}/`;
//   } else {
//     completeDate += `${month}/`;
//   }
//   if (day < 10) {
//     completeDate += `0${day} `;
//   }else {
//     completeDate += `${day} `;
//   }
//   if (hour<10) {
//     completeDate += `0${hour}:`;
//   } else {
//     completeDate += `${hour}:`;
//   }
//   if (minutes<10) {
//     completeDate += `0${minutes}:`;
//   } else {
//     completeDate += `${minutes}:`;
//   }
//   if (seconds<10) {
//     completeDate += `0${seconds}`;
//   } else {
//     completeDate += `${seconds}`;
//   }
//   login.loginAt = completeDate;
//   alert(`Welcome ${person.name}, you logged in correctly.`);
// } else {
//   alert("Your login data are incorrect.");
// }
/*
let hero = {
  character: "Punisher",
  name: "Frank Castle",
  powers: [
    "Peak Human Strength",
    "Unarmed Combat",
    "Hand-to-Hand Combat",
    "Superior Marksmanship",
    "Pain Immunity",
  ],
  info: {
    yearCreated: 1974,
    powerOrigin: "Military Training",
    Weapons: ["Handguns", "Rifles", "Shotguns"],
    didYOuKnow:
      "Traumatized by horrific events both at home and abroad, Frank Castle becomes The Punisher, using the lethal skills he honed as a Marine to exact violent vengeance on those he deems responsible for the death of his family.",
  },
};
*/
/*
let shoppingCart = new Object();

shoppingCart.product1 = new Object();
shoppingCart.product1.product_id = 0;
shoppingCart.product1.name = "Nike Air Zoom Pegasus 38";
shoppingCart.product1.price = 100;
shoppingCart.product1.quantity = 1;
shoppingCart.product2 = new Object();
shoppingCart.product2.product_id = 1;
shoppingCart.product2.name = "Nike ZoomX Vaporfly Next% 2";
shoppingCart.product2.price = 100;
shoppingCart.product2.quantity = 1;
shoppingCart.product3 = new Object();
shoppingCart.product3.product_id = 2;
shoppingCart.product3.name = "Paredes";
shoppingCart.product3.price = 300;
shoppingCart.product3.quantity = 1;
shoppingCart.product4 = new Object();
shoppingCart.product4.product_id = 3;
shoppingCart.product4.name = "J'Hayber";
shoppingCart.product4.price = 800;
shoppingCart.product4.quantity = 1;

for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
  for (
    let j = 0;
    j < Object.keys(shoppingCart[Object.keys(shoppingCart)[i]]).length;
    j++
  ) {
    console.log(`${Object.keys(shoppingCart[Object.keys(shoppingCart)[i]])[j]}:
  ${
    shoppingCart[Object.keys(shoppingCart)[i]][
      Object.keys(shoppingCart[Object.keys(shoppingCart)[i]])[j]
    ]
  }
  `);
  }
}


shoppingCart = {​
0: {​
product_id:0,
name:"Nike Air max",
price:"150$",
quantity:"1",
}​,
1: {​
product_id:1,
name:"Nike Air force",
price:"160$",
quantity:"5",
}​,
2: {​
product_id:2,
name:"Nike Air jordan",
price:"170$",
quantity:"9",
}​,
3: {​
product_id:3,
name:"Nike Air",
price:"180$",
quantity:"2",
}​,
}​;
for (leti = 0; i < Object.keys(shoppingCart).length; i++) {​
letid = shoppingCart[i].product_id;
letname = shoppingCart[i].name;
console.log("id: ", id, " name: ", name);
}​
*/
/*
let colors = ["red", "blue", "green"];
alert(colors[0]);
colors[2] = "brown";
colors[3] = "black";
alert(colors.length);
colors[colors.length] = "black";
colors[colors.length] = "white";
console.log(colors);


let checking = ["foo", "bar", "baz", "qux"];
console.log(Array.from(checking.keys()));
console.log(Array.from(checking.values()));
console.log(Array.from(checking.entries()));

let mixedChecking = Array.from(checking.entries());
console.log(mixedChecking);*/
/*
let numbers = [1, 4, 6, 8];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum);

let hero = {
  character: "Punisher",
  name: "Frank Castle",
};

for (let key in hero) {
  console.log(`${key}: ${hero[key]}`);
}

["Aragorn", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
[..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
  console.log(letter);
});


let numbers = [1, 2, 3];
let result = numbers.map((item, index, array) => item *2);
console.log(result);

let numbers = [15, 10, 5, 0,-5, -10, -15];
let result = numbers.filter(x => x < 5);
console.log(result);




let numbers = [1, 2, 3, 4, 5];
console.log(numbers.every((item, index, array) => item > 2));
console.log(numbers.some((item, index, array) => item > 2));


let numbers = [1, 2, 3, 4, 5];
console.log(result);
let result = numbers.reduce((accum, item, index, array) => accum + item, 0);
//let results = numbers.reduceRight((accum, item, index, array) => accum + item, 0);
//console.log(results);
*/

/*
//Nested arrays
let calendar = new Array(5);
for (let i = 0; i < calendar.length; i++) {
  calendar[i] = new Array(7);
}

//Initialize the array
for (let row = 0, day = 1; row < calendar.length; row++) {
  for (let col = 0; col < calendar[row].length;col++) {
    if (day < 31) {
      calendar[row][col] = day++;
    } else {
      calendar[row][col] = day;
      day = 1;
    }
  }
}
console.log(calendar);
*/

//const sum = function (num1, num2) {
//  return num1 + num2;
//}

// sayHello("my friend", "today will be a great day");
//const sayHello = function (name, message) {   ---> Error ya que const no se eleva
// function sayHello(name, message) {
//   console.log(`Hello ${name}, ${message}`);
// }

// const sum = (num1, num2) => {
//   return num1 + num2;
// }

// const square = x => x * x;
// console.log(square(4));

// const exponential = x => x * x * x;
// console.log(exponential(4));


// function sum(num1, num2) {
//    return num1 + num2;
//    console.log("Hello world"); // no se mostrara
// }
// alert(sum(2,2));