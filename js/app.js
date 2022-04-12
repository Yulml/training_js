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