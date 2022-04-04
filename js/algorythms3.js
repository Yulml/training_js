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

/*
const exercise2 = () => {*/
/*
new Date().getHours() >= 6 && new Date().getHours() < 12
  ? alert(`Buenos días`)
  : new Date().getHours() >= 12 && new Date().getHours() < 21
  ? alert(`Buenas tardes`)
  : alert(`Buenas noches`);
*/
/*
  if (new Date().getHours() < 12) {
    alert("Buenos días");
  } else if (new Date().getHours() < 21) {
    alert("Buenas tardes");
  } else {
    alert("Buenas noches");
  }
};

exercise2();
*/

// EXCERSIZE 03
// Shorter method hex code generation. 16777215 is the maximum value for RGB color white. But with the other method I get to use a function.
/*
const exercise3 = () => {
  function generateRandomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor.length != 7) {
      // In any case, the color code is invalid
      randomColor = generateRandomColor();
    }
    return randomColor; // The random color will be freshly served
  }

  for (let i = 0, hexColor; i < 10; i++) {
    console.log(`%cHello World!`, `color:${generateRandomColor()}`);
  }
};
exercise3();*/
/*
const exercise3 = () => {
  function randomHexColor() {
    color = "#";
    const colorCodes = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for (let j = 0; j < 6; j++) {
      let index = Math.floor(Math.random() * colorCodes.length);
      color += colorCodes[index];
    }
    return color;
  }
  let color;
  for (let i = 0; i < 10; i++) {
    randomHexColor();
    console.log(
      `%cHex code for color number ${i + 1}: ${color}`,
      `color:${color}`
    );
  }
};
exercise3();
*/

// EXCERSIZE 04
/*
const exercise4 = () => {
  const idChars = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  let userId = prompt("Please enter your DNI to validate");
  let idSum = userId.substring(0, userId.length - 1);
  userId == idSum + idChars[parseInt(idSum) % 23]
    ? alert(`Valid DNI`)
    : alert(`The entered data is wrong`);

    const dniGenerator = () => {
      let randomNumber = Math.floor(
        Math.random() * (100000000 - 10000000) + 10000000
      );
      randomNumber += idChars[randomNumber % 23];
      return randomNumber;
    };
    for (let index = 0; index < 100; index++) {
      console.log(dniGenerator());
    };
};
exercise4();
*/

// EXCERSIZE 05

const exercise5 = () => {
  const letters = ["B","C","D","F","G","H","J","K","L","M","N","P","R","S","T","V","W","X","Y","Z"];
  let howMany = parseInt(prompt("How many number plates do you want?"));
  let arrOfPlates = [];
  function genPlates() {
    let plateNum = [];
    do {
      let index = Math.floor(Math.random() * 10);
      plateNum.push(index);
    } while (plateNum.length < 4);
    do {
      let index = letters[Math.floor(Math.random() * letters.length)];
      plateNum.push(index);
    } while (plateNum.length < 7);
    plateNum.splice(4, 0, " ");
    arrOfPlates.push(plateNum.join(""));
  }
  
  do {
    genPlates();
  } while (arrOfPlates.length < howMany);
  console.log(arrOfPlates);
};

exercise5();

// EXCERSIZE 06
/*
const exercise6 = () => {
  const randQuote = () => {
    const quotes = Array.of(
      Array.of(
        `Frankly, my dear, I don't give a damn.`,
        `Rhett Butler`,
        `Clark Gable`,
        `Gone with the Wind`
      ),
      Array.of(
        `I'm gonna make him an offer he can't refuse.`,
        `Vito Corleone`,
        `Marlon Brando`,
        `The Godfather`
      ),
      Array.of(
        `Go ahead, make my day.`,
        `Harry Callahan`,
        `Clint Eastwood`,
        `Sudden Impact`
      ),
      Array.of(
        `You talkin' to me?`,
        `Travis Bickle`,
        `Robert De Niro`,
        `Taxi Driver`
      ),
      Array.of(
        `I love the smell of napalm in the morning.`,
        `Lt. Col. Bill Kilgore`,
        `Robert Duvall`,
        `Apocalypse Now`
      ),
      Array.of(
        `Louis, I think this is the beginning of a beautiful friendship.`,
        `Rick Blaine`,
        `Humphrey Bogart`,
        `Casablanca`
      ),
      Array.of(
        `Show me the money!`,
        `Rod Tidwell`,
        `Cuba Gooding Jr.`,
        `Jerry Maguire`
      ),

      Array.of(
        `You're gonna need a bigger boat.`,
        `Martin Brody`,
        `Roy Scheider`,
        `Jaws`
      ),
      Array.of(
        `I'll be back!`,
        `The Terminator`,
        `Arnold Schwarzenegger`,
        `The Terminator`
      ),
      Array.of(
        `Hasta la vista, baby.`,
        `The Terminator`,
        `Arnold Schwarzenegger`,
        `Terminator 2: Judgment Day`
      ),
      Array.of(
        `You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?`,
        `Harry Callahan`,
        `Clint Eastwood`,
        `Dirty Harry`
      ),
      Array.of(
        `Keep your friends close, but your enemies closer.`,
        `Michael Corleone`,
        `Al Pacino`,
        `The Godfather Part II`
      ),
      Array.of(
        `Say 'hello' to my little friend!`,
        `Tony Montana`,
        `Al Pacino`,
        `Scarface`
      ),
      Array.of(
        `Here's Johnny!`,
        `Jack Torrance`,
        `Jack Nicholson`,
        `The Shining`
      ),
      Array.of(
        `Arise, arise, Riders of Théoden! Spear shall be shaken, shield shall be splintered, a sword-day, a red day, ere the sun rises! Ride now, ride now, ride! Ride for ruin and the world's ending! Death! Death! Death! Forth Eorlingas!`,
        `King Theoden`,
        `Bernard Hill`,
        `The Lord of the Rings: The Return of the King`
      ),
      Array.of(
        `Sons of Gondor! Of Rohan! My brothers. I see in your eyes the same fear that would take the heart of me. A day may come when the courage of Men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day. An hour of wolves and shattered shields when the Age of Men comes crashing down, but it is not this day! This day we fight! By all that you hold dear on this good earth, I bid you stand, Men of the West!`,
        `King Aragorn II Elessar`,
        `Viggo Mortensen`,
        `The Lord of the Rings: The Return of the King`
      ),
      Array.of(
        `I've seen things you people wouldn't believe... Attack ships on fire off the shoulder of Orion... I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain... Time to die.`,
        `Roy Batty`,
        `Rutget Hauer`,
        `Blade Runner`
      ),
      Array.of(
        `Hello. My name is Inigo Montoya. You killed my father. Prepare to die!`,
        `Iñigo Montoya`,
        `Mandy Patinkin`,
        `The Princess Bride`
      ),
      Array.of(
        `The first rule of Fight Club is: You do not talk about Fight Club. The second rule Of Fight Club is: You do not talk about Fight Club.`,
        `Tyler Durden`,
        `Brad Pitt`,
        `Fight Club`
      ),
      Array.of(
        `You met me at a very strange time in my life.`,
        `Narrator`,
        `Edward Norton`,
        `Fight Club`
      ),
      Array.of(
        `And I... am... Iron Man`,
        `Iron Man`,
        `Robert Downey Jr.`,
        `Avengers: Endgame`
      )
    );
    const randNums = () => Math.floor(Math.random() * quotes.length);
    console.log(quotes[randNums()]); preguntar si se puede referenciar un indice de un array dentro de un array sin guardarlo en variable. Por ejemplo, mostrar solo los valores de la cita en sí y el personaje.

    console.log(quotes[randNums()][2]); para sacar del arrayº interior, en este caso el actor
  };

   This method I found through a search engine solves my problems and I mostly understand it,
   I DID NOT WRITE THIS, I ONLY MODIFIED IT

  let timerId = setInterval(() => randQuote(), 10000);  repeat with the interval of 10 seconds
  setTimeout(() => {
    clearInterval(timerId);
    randQuote();
  }, 120000);  after 120 seconds stop

  window.setInterval(randQuote, 10000); se ejecuta (en este caso la funcion randQuote) continuamente cada 10 segundos. Incluso la primera ejecución ocurre tras 10 segundos de espera
  window.setTimeout(randQuote, 10000); solo se ejecuta una vez tras esperar 10 segundos
};

exercise6();
*/
// EXCERSIZE 07
/*
const exercise7 = () => {
  const randNums = () => Math.floor(Math.random() * 500 + 1) - 1;

  let arrayOfNumbers = new Array();

  for (let i = 0; i < 100; i++) {
    arrayOfNumbers.push(randNums());
  }

  let filter = arrayOfNumbers.filter((number) => {
    return number % 2 == 0;
  });

  console.log(filter.sort((a, b) => a - b));
};

exercise7();
*/
// EXCERSIZE 08
/*
DO WHILE ES IDONEO

guardar cartas en array y comparar si es mayor o menor la posicion en el array, no el valor en si.
*/
// EXCERSIZE 09
/*
const alphabet =[];
for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
};
  let encodedText = "";

function encode() {

  for (let j = 0; j < rawText.length; j++) {
    encodedText += String.fromCharCode(rawText.charCodeAt(j+3));
    
  }
  return encodedText;
};
function decode (){};


rawText = prompt("Please insert your text").toLowerCase;
coding = prompt("Encode or Decode?").toLowerCase;
coding == "encode" ? encode() : "decode" ? decode(): alert("Refresh you dumbo");
console.log(encodedText);
//pasar todo a lower ascii 97-122 lowercase-> rueda de alfabeto -> de las Z si avanza 3 posiciones seria la D


console.log(alphabet);
*/
//booleano true or false
//Is the text encoded? Y/N
//

//what is the text?
//function encode(true, "string");
//function decode();

//recorrer string alphabet e ir rellenando nuevo texto con posicion+desplazamiento

//cuando llega al final

//if posicion + desplazamiento > 122
//  then diferencia = posicion + desplazamiento - 122
//  rellenar arraytexto = arraytexto += diferencia
