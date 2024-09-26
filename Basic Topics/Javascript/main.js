// Variables
let mybook = "ali";
const firstName = "mohammad";
var b = 12;

// Comment
/* Multi Comment */

// Data Types
// String Boolean Number Object Array Undefined Null
let person = {name: "ali", age:23, marry: true}
let people = [2,"ali",23,true]
people[0]
// Get Data From User
const userData = prompt("what is your first name?");
let num3 = "23"
// Data Types conversions
Number();
Boolean();
String();

// Logical Operators
// && || !
"23"  === 23
// Comparative Operators
// == === != !== > < >= <=

//Assignment Operators
// + - / * % **
// ++x x++

//Conditions
// if (){} else if else

// Loops
for (let i; i < 10; i++) {
  console.log(i);
}
var i = 1;
while (i < 11) {
  document.write(i + "<br>");
  i++;
}

// Switch Case
var a = 5;
var b = 5;
switch (a + b) {
  case 5:
    document.write("Total is ...");
    break;

  case 9:
    document.write("Total is ...");
    break;

  case 10:
    document.write("Total is ...");
    break;
}

//Math
Math.round();
Math.pow();
Math.sqrt();
Math.abs();
Math.ceil();
Math.floor();
Math.sin();
Math.cos();
Math.min();
Math.max();
Math.random();

// Function
function myTodo(digit = 12) {
  console.log(digit);
  return digit + 8;
}
//Arrow Function
let multiple = () => {
  console.log("hi there");
};

// String Methods
let some = "Hello-Baby-Hi";

some.charAt(4); // return o as 4th index
some.charCodeAt(7); // return a unicode 65
some.trim(); // remove space from first and last
some.search("o"); // return o index
some.indexOf("o"); // return o index
some.includes("e"); // return true or false
some.lastIndexOf("l"); // return the second l index
some.toLowerCase(); // make all letters small
some.toUpperCase(); // make all letters capital
some.split("-"); // make 3 words by - sign
some.concat("welcome to eng class"); // add this to string
some.slice(0, 5); // slice the string from 0 t0 5 index
some.substring(0, 5); // same as slice

// Array Methods

let something = [1, 2, 3, 4];
something[0];
Array.isArray(something); // show that it is array not
something.pop(); // remove from end
something.push(); // add to end
something.shift(); // add to first
something.unshift(); // remove from first
something.splice(0, 1, 5); // remove 1 item from array at 0 index and add 5 to it
something.slice(1, 3); // return 1 t0 3 of the array
something.join(" , "); // add , between items
something.reverse(); // return from last to first
something.filter((n) => n > 2); // filter the array by condition
something.find((n) => n > 1); // return the first item that is true
something.includes(1); // return true or false
something.indexOf(); // return true or false
something.findIndex();
something.map((item) => item + 5); // for in array
something.forEach(); // for in array
something.some();
something.every();

// Falsy Values
// 0 "" undefined NaN false

//Hoisting
// only with var and function not arrow

let time = 0;
setInterval(function () {
  console.log(time);
  return (time = time + 1);
}, 1000);

setTimeout(function () {
  console.log("2 second passed");
}, 2000);


//Dom section

// Selecting a tag
document.getElementById;
document.getElementsByClassName;
document.getElementsByTagName;
document.querySelector;
document.querySelectorAll;
document.querySelector(".p1")
document.querySelector("#p1")
document.querySelector("p")
// Access to tag attribute
some.setAttribute("dir", "rtl");
some.getAttribute("class");

//Access to style of a tag
some.style.color = "red";

//Classlist
const list = element.classList;
list.add("myStyle");
const list2 = element.classList;
list.remove("myStyle");
const lis3 = element.classList;
list.toggle("myStyle");

//Create new element
document.createElement("div");

//Add element to another one
ul.append(some);

// Access to tag value
some.innerHTML;
some.innerText;
some.textContent;

//Date
const time23 = new Date();

// Scroll
window.scrollTo(100, 0);
window.scrollBy(100, 20);

//Event Listener
document.addEventListener("click", () => {
  console.log("hey");
});
async function hey(name) {
  return await name;
}

//RemoveEventListener
document.removeEventListener("click", () => {
  console.log("hey");
});

//LocalStorage
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
document.addEventListener("click", myFunction);

//Functions
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

//Arrow functions
const myApp = () => {
  console.log("hi");
};

//Try catch
try {
} catch (error) {}

//Promise
myApp
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(console.log("helllo"));

//Attributes
// hasAttribute removeAttribute

//Events
// onfocus onblur onkeydown onkeyup onkeypress
// onclick dbclick onresize onscroll onselect onunload keypress keydown keyup
// onbeforeunload DomContentLoaded onload onchange onsubmit oncontextmenu-> e.preventDefault
// touchcancel touchend touchmove touchstart

//preventDefault
//pageX pageY
// remove() remove element
//defer

