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
/*
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
*/
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
    //console.log(quotes[randNums()]);
    let randomQuote = quotes[randNums()];
    console.log(`Quote: ${randomQuote[0]}\nCharacter: ${randomQuote[1]}\nActor: ${randomQuote[2]}\nMovie: ${randomQuote[3]}`);// para sacar del array interior, en este caso el actor
  };

  let chronoId = setInterval(() => randQuote(), 10000);
  setTimeout(() => {
    clearInterval(chronoId);
    randQuote();
  }, 120000);

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

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck() {
	let card = function(value, suit) {
		this.name = value + " of " + suit;
		this.value = value;
		this.suit = suit;

		return {
			Name: this.name,
			Value: this.value,
			Suit: this.suit
		}
	}
	for (let i=0; i<suits.length; i++) {
		for (let j=0; j<values.length; j++) {
			deck.push(card(values[j], suits[i]));
		}
	}	
}
buildDeck()


function dealCardsToPlayers() {
	let card1 = Math.floor(Math.random()*deck.length)
	player1Card = deck[card1];
		deck.splice(card1,1);
	let card2 = Math.floor(Math.random()*deck.length)
	player2Card = deck[card2];
		deck.splice(card2, 1);	 
	return deck;

}
dealCardsToPlayers()


function announceCards() {
	console.log(`Player 1 is showing the ${player1Card.Name}`)
	console.log(`Player 2 is showing the ${player2Card.Name}`)
	}
announceCards()


function cardToRank() {
    player1Rank = values.indexOf(player1Card.Value) + 2;
    player2Rank = values.indexOf(player2Card.Value) + 2;
}

cardToRank();


function announceWinner() {
	if (player1Rank > player2Rank) {
		console.log("Player 1 wins!")
	} else {console.log("Player 2 wins!")}
}

announceWinner()

function returnCardsToDeck() {
	deck.push(player1Card);
	deck.push(player2Card);
}

returnCardsToDeck()


function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

/*
DO WHILE ES IDONEO

guardar cartas en array y comparar si es mayor o menor la posicion en el array, no el valor en si.
*/
// EXCERSIZE 09
/*
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let newAlpha = "";
let rawText = prompt("Please insert your text").toLowerCase().replace(/\s+/g, '');
let coding = prompt("Encode or Decode?").toLowerCase().replace(/\s+/g, '');
let offsetting = parseInt(prompt("Cypher key?"));

function shift(n) {
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    newAlpha += alphabet[offset];
  }
}
shift(offsetting);

function encode(message) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0, index; i < message.length; i++) {
    result += newAlpha[alphabet.indexOf(message[i])];
  }
  return result;
}

function decode(message) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let index = newAlpha.indexOf(message[i]);
    result += alphabet[index];
  }
  return result;
}

coding == "encode" ? console.log(encode(rawText)) : coding == "decode" ? console.log(decode(rawText)) : console.log("Type it correctly you dumbo");
*/