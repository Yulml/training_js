// EXCERSIZE 01
/*
let num1 = parseInt(prompt(`Please insert the minimum numerical limit`));
let num2 = parseInt(prompt(`Please insert the maximum numerical limit`));
const randNum = () => Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
let twentyRand = Array.from({ length: 20 }, () => randNum()); // I could put the randomizer here instead of inside a function and make the code 1 line shorter.
console.log(`min value: ${Math.min(...twentyRand)} \nmax value: ${Math.max(...twentyRand)}`);
*/
// EXCERSIZE 02 
// I really don't know where to put the function in this one
/*
if (new Date().getHours() < 12) {
  alert("Buenos días");
} else if (new Date().getHours() < 21) {
  alert("Buenas tardes");
} else {
  alert("Buenas noches");
}
*/
// EXCERSIZE 03

function randomHexColor() {
    color = "#";
    const colorCodes = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",];
    for (let j = 0; j < 6; j++) {
      let index = Math.floor(Math.random() * colorCodes.length);
      color += colorCodes[index];
    }
    return color;
  }
  
  let color;
  for (let i = 0; i < 10; i++) {
    randomHexColor();
    console.log(`%cHex code for color number ${i+1}: ${color}`, `color:${color}`);
  }

// Shorter method hex code generation. 16777215 is the maximum value for RGB color white. But with the other method I get to use a function.
// const randomColor = Math.floor(Math.random()*16777215).toString(16); investigar o preguntar

// EXCERSIZE 04

// EXCERSIZE 05

// EXCERSIZE 06

// EXCERSIZE 07

// EXCERSIZE 08

//DO WHILE ES IDONEO

//guardar cartas en array y comparar si es mayor o menor la posicion en el array, no el valor en si.

// EXCERSIZE 09

//pasar todo a uppercase -> rueda de alfabeto -> de las Z si avanza 3 posiciones seria la D
