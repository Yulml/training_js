/*
// let nav = document.querySelector("nav");
// console.log(nav);
// let active = document.querySelector(".active");
// console.log(active);
// let paragraph = document.querySelector("#first");
// console.log(paragraph);

// let paragraphAndHeader = document.querySelectorAll("h1,p")
// console.log(paragraphAndHeader[1].innerText);

// console.log(nav.children[0].children[0].children[0]);
// console.log(paragraphAndHeader[0].nextElementSibling.nextElementSibling);
// console.log(document.body.children[1].firstElementChild.lastElementChild.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(nav.firstElementChild.childElementCount);
// console.log(document.body.childElementCount);
let box1 = document.querySelector("section").firstElementChild;
let box2 = box1.nextElementSibling;
let box3 = box2.nextElementSibling;

// box1.classList.add("dark");
// box1.classList.remove("dark");
// box2.classList.add("dissapear");
// box2.classList.remove("dissapear");

// box2.classList.toggle('light');
// //.classList.contains(NameClass) sirve para buscar en un tag una clase
// console.log(box3.classList.contains('light'));
// console.log(box2.classList.contains('light'));

// let number = document.querySelector('section').lastElementChild.previousElementSibling.dataset.boxNumber;
// console.log(number);
// document.body.innerHTML = '<h1>Wow!!</h1>';
// console.log(document.querySelector("section").outerHTML);

// document.body.insertAdjacentHTML('afterbegin', `<nav>Navigation</nav>`);
// document.querySelector('nav').insertAdjacentHTML('beforebegin', '<h1>Main Header</h1>');
// document.querySelector('nav').insertAdjacentHTML("beforeend", ' <a href="https://www.google.es" target="_blank">Main Header</a>');
// document.querySelector('nav').insertAdjacentHTML("afterend", '<p>lore impsum</p>');
// //console.log(document.querySelector('h1').textContent);
// document.querySelector('h1').textContent = "Stronger together";

// let header = document.createElement("h1");
// header.append("Hello world!");
// header.prepend('¡');
// document.body.append(header);
// document.querySelector('h1').firstChild.before("¡¡");

// let paragraph = document.createElement("p");
// paragraph.textContent="Writting a paragraph";
// document.body.append(paragraph);
// document.querySelector("section").firstElementChild.after(paragraph);
// document.querySelector("h1").replaceWith(paragraph);
// paragraph.remove();

let paragraph = document.querySelector("p");
paragraph.style.textAlign = "center";
paragraph.style.textTransform = "capitalize";
paragraph.style.backgroundColor = "black";
paragraph.style.color = "white";
paragraph.style.padding = "1em";

paragraph.setAttribute("class","margin");
paragraph.setAttribute("title","This is a paragraph");
// paragraph.className = "margin";

console.log(paragraph.getAttribute("class"));
console.log(paragraph.style.cssText);



document.body.addEventListener("click", () => alert("This is the body"));
document.querySelector("section").addEventListener("click", () => alert("This is the section"));
document.querySelector("div").addEventListener("click", () => alert("This is the div"));



console.log(document.forms[1]);
document.forms[1].onsubmit = (e) => e.preventDefault();


// JS ejemplo de Drag&Drop
let div1 = document.querySelector("#Uno");
let div2 = document.querySelector("#Dos");

div1.addEventListener("dragstart", () => {
  console.log("Div 1 Dispara dragstart");
});
div1.addEventListener("drag", () => {
  console.log("Div 1 Dispara drag");
});
div1.addEventListener("dragend", () => {
  console.log("Div 1 Dispara dragend");
});
div2.addEventListener("dragenter", (e) => {
  console.log("Div 2 Dispara dragenter");
  e.preventDefault();
});
div2.addEventListener("dragover", (e) => {
  console.log("Div 2 Dispara dragover");
  e.preventDefault();
});
div2.addEventListener("drop", () => {
  console.log("Div 2 Dispara drop");
});
div2.addEventListener("dragleave", () => {
  console.log("Div 2 Dispara dragleave");
});
*/

// Multiple destructuring
const hero = {
  character: "Doctor Strange",
  name: "Benedict Cumberbatch",
  powers: {
    artifacts: ["Eye of Agamotto", "Book of the Vishanti", "Orb of Agamotto"],
    skills: ["judo", "magically conjured weapons"],
  },
};
/*
const {
  character,
  powers: {artifacts, ...otherPowers},
  ...otherHeroInfo
  } = hero;
  console.log(character);
  console.log(artifacts);
  console.log(otherPowers);
  console.log(otherHeroInfo);
  */
//sacar solo nombre y primera skill
/*
  const {
    name,
    powers: { skills }
  } = hero;
  console.log(skills[0]);
*/
/*
// JSON serialization and parsing
let person = {
  id: 1,
  first_name: "John",
  last_name: "Doe",
  email: "john@google.com",
};
let jsonText = JSON.stringify(person);
console.log(jsonText);

// create a new object
let anotherPerson = JSON.parse(jsonText);
anotherPerson.first_name = "Jane";
console.log(person);
console.log(anotherPerson);

jsonText = JSON.stringify(anotherPerson);
console.log(jsonText);

*/
/*
// Web Storage
// localStorage
let userName = prompt('Please enter your name:')
let phone = prompt('Please enter your phone:')
// save info
localStorage.name = userName
localStorage.phone = phone
// query info
console.log(localStorage.name);
console.log(localStorage.phone);
localStorage.clear() // remove all properties of a storage object

// save and query objectss
let data = { userName, phone };
localStorage.data = JSON.stringify(data);
console.log(JSON.parse(localStorage.data));
// getItem(), setItem(), and removeItem() methods are also available
// to manage data
let token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c2";
localStorage.setItem("token", token);
console.log(localStorage.getItem("token"));
localStorage.removeItem("token");
console.log(localStorage.getItem("token"));
*/
/*
// saving dates
let loginDate = (new Date()).toString();
localStorage.loginDate = loginDate;
console.log(new Date(Date.parse(localStorage.loginDate)));
// check application tab in dev tools
*/

/*
// sessionStorage
let date = new Date();
let logginTime =
date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
sessionStorage.setItem("loggedAt",logginTime);
console.log(sessionStorage.getItem("loggedAt"));
*/

/*
// Asynchronous JavaScript
// Callbacks
// Synchronous callback
const sayHello = (userName) => {
  console.log("Hi " + userName);
  };
  const getUserName = (callback) => {
  let userName = prompt("Please, enter your name: ");
  callback(userName);
  };
  getUserName(sayHello);
  */
/*
// Asynchronous callback
const countDown = () => {
  console.log("Ready?");
  let start = 0;
  let end = 0;
//  let count = 3;
  for (let i = 5, count = 1; i >= 0; i--, count++) {
    start = new Date().getTime();
//    console.log(start);
    setTimeout(() => {
      end = new Date().getTime();
      console.log(i === 0 ? "GO!" : i);
//      console.log(count);
//      console.log(end - start, " ms");
    }, count * 1000);
  }
};
countDown();
console.log("Steady");
*/
/*
const countDownHell = () => {
  let start = 5;
  setTimeout(() => {
    console.log(start--);
    setTimeout(() => {
      console.log(start--);
      setTimeout(() => {
        console.log(start--);
        setTimeout(() => {
          console.log(start--);
          setTimeout(() => {
            console.log(start--);
            setTimeout(() => {
              console.log("Running!");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
countDownHell();
*/
// Promise structure
let doSomeAsyncStuff = () =>
  new Promise((resolve, reject) => {
    if (done) {
      // fullfilled (resuelto con éxito)
      resolve(console.log("success"));
    } else {
      // error, rejected (rechazado)
      reject(err.message);
    }
  });
/*
// Promise (pending)
let promise = new Promise(() => {});
setTimeout(console.log, 0, promise);  
*/

/*
// Promise (resolved)
let successPromise = new
Promise((resolve, reject) =>
resolve("success!"));
setTimeout(console.log, 0,
successPromise);
*/

/*
// Promise (rejected)
let errorPromise = new Promise((resolve,
reject) => reject(new Error("something went wrong.")));
setTimeout(console.log, 0, errorPromise);
*/