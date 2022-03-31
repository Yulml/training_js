// EXCERSIZE 01
/*
const exercise1 = () => {
  let minLim = parseInt(prompt(`Please insert the minimum numerical limit`));
  let maxLim = parseInt(prompt(`Please insert the maximum numerical limit`));
  let randNums = Array.from(
    { length: 20 },
    () => Math.floor(Math.random() * (maxLim - minLim + 1)) + minLim
  );
  console.log(
    `min value: ${Math.min(...randNums)} \nmax value: ${Math.max(...randNums)}`
  );
};
exercise1();
*/

// EXCERSIZE 02
// I really don't know where to put the function in this one
/*
const exercise2 = () => {
if (new Date().getHours() < 12) {
  alert("Buenos días");
} else if (new Date().getHours() < 21) {
  alert("Buenas tardes");
} else {
  alert("Buenas noches");
};
exercise2();
*/
/*
// EXCERSIZE 03
// const exercise3 = () => {
// function randomHexColor() {
//     color = "#";
//     const colorCodes = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",];
//     for (let j = 0; j < 6; j++) {
//       let index = Math.floor(Math.random() * colorCodes.length);
//       color += colorCodes[index];
//     }
//     return color;
//   }

//   let color;
//   for (let i = 0; i < 10; i++) {
//     randomHexColor();
//     console.log(`%cHex code for color number ${i+1}: ${color}`, `color:${color}`);
//   };
exercise3();*/
// Shorter method hex code generation. 16777215 is the maximum value for RGB color white. But with the other method I get to use a function.
// const randomColor = Math.floor(Math.random()*16777215).toString(16); investigar o preguntar

// EXCERSIZE 04
/*
const exercise4 = () => {

const idChars = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let userId = prompt("Please enter your DNI to validate");
let idSum="";

for (let i = 0; i < userId.length-1; i++) {
  idSum += userId.charAt(i);
}

if (userId == idSum + (idChars[parseInt(idSum)%23])) {
  console.log(`Valid DNI`);
} else {
  console.log(`The entered data is wrong`);
};
exercise4();*/

// EXCERSIZE 05
/*const exercise5 = () => {
const letters = ["B","C","D","F","G","H","J","K","L","M","N","P","R","S","T","V","W","X","Y","Z"];
let howMany = parseInt(prompt("How many number plates do you want?"));
let arrOfPlates = [];

function genPlates() {
  let plateNum = [];
  let index;
  do {
    index = Math.floor(Math.random() * 10);
    plateNum.push(index);
  } while (plateNum.length < 4);
  do {
    index = letters[Math.floor(Math.random() * letters.length)];
    plateNum.push(index);
  } while (plateNum.length < 7);
  arrOfPlates.push(plateNum.join(""));
}

do {
  genPlates();
} while (arrOfPlates.length < howMany);

console.log(arrOfPlates);};
exercise5();*/

// EXCERSIZE 06

// EXCERSIZE 07

// EXCERSIZE 08

//DO WHILE ES IDONEO

//guardar cartas en array y comparar si es mayor o menor la posicion en el array, no el valor en si.

// EXCERSIZE 09

//pasar todo a uppercase -> rueda de alfabeto -> de las Z si avanza 3 posiciones seria la D
