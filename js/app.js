//Four seasons

//getting real month

let actualDate = new Date();

let actualMonth = actualDate.getMonth();

if (actualMonth == 11 || actualMonth == 0 || actualMonth == 1) {
  season = "Winter";
} else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
  season = "Spring";
} else if (actualMonth == 5 || actualMonth == 6 || actualMonth == 7) {
  season = "Summer";
} else if (actualMonth == 8 || actualMonth == 9 || actualMonth == 10) {
  season = "Fall";
} else {
  season = "Unknown season";
}

//show month name

let monthName = "";

switch (actualMonth) {
  case 0:
    monthName = "January";
    break;
  case 1:
    monthName = "February";
    break;
  case 2:
    monthName = "March";
    break;
  case 3:
    monthName = "April";
    break;
  case 4:
    monthName = "May";
    break;
  case 5:
    monthName = "June";
    break;
  case 6:
    monthName = "July";
    break;
  case 7:
    monthName = "August";
    break;
  case 8:
    monthName = "September";
    break;
  case 9:
    monthName = "October";
    break;
  case 10:
    monthName = "November";
    break;
  case 11:
    monthName = "December";
    break;

  default:
    monthName = "Not a month";
    break;
}

console.log(monthName);

let character = "Hermeneguildo";
let power = "";
switch (character) {
  case "Romualdo":
    power = "Never getting drunk";
    break;
  case "Hermeneguildo":
    power = "Never getting itchy";
    break;
  case "Crisóstomo":
    power = "Immune to nothing";
    break;

  default:
    console.log("Choose your character");
    break;
}

console.log(power);
/*if (actualDate.getMonth() == 2) {
    console.log = "Marzo";
}*/

/*
let n = prompt("Please enter your number");

if (n == 1) {
  console.log("Winner!");
} else if (n == 2) {
  console.log("Silver medal");
} else if (n == 3) {
  console.log("Bronze medal");
} else {
  console.log("Try again please");
}
*/
