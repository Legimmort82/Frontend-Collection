//Variables

// a = 3
// b = "ahmad"

let name = "reza";
const age = 3.14;

name = "ahmad";
// age = 32

// type
let a = 1; // number
let b = "ali"; // string

// boolean
// let login = true;
// let loginout = false;

// let person = { name: "ali", age: 22 }; //object
// let people = [1, 2, 3, 10, 20]; // array
// let hye = undefined;
// let hye1 = null;

// let username = prompt("what is your name?");
// let userAge = prompt("what is your age?");
// let userMarried = prompt("Are you married?");

// let userData = { name: username, age: userAge, married: userMarried };
// console.log(userData);
// let num1 = 23;
// let num2 = 26;
// let str1 = "ali";
// let str2 = null;
// if (a !== 1) {
//   console.log("a = 1");
// } else if (a == 0) {
//   console.log("a = 0");
// } else console.log("a = 1");
// if (num1 === "23") {
//   console.log("it is 23");
// }
// let some1 = 10;
// let some2 = 12;
// switch (some1 + some2) {
//   case 20:
//     console.log("it is 20");
//     break;
//   case 22:
//     console.log("it is true");
// }

// console.log(Math.round(23.5));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(16));
// console.log(Math.abs(-20));
// console.log(Math.ceil(20.2));
// console.log(Math.floor(20.8));
// console.log(Math.min(1, 10, 20, -5));
// console.log(Math.max(1, 10, 20, -5));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 7));

// function sum(a = 10, b = 8) {
//   console.log(a + b);
//   return a + b;
// }
// sum();

// let callUs = () => {};

// let example = "   hello-iam-Majid    "

// console.log(example.charAt(10));
// console.log(example.charCodeAt(10));
// console.log(example.trim());
// console.log(example.search("i"));
// console.log(example.indexOf("i"));
// console.log(example.includes("m"));
// console.log(example.lastIndexOf("a"));
// console.log(example.toLowerCase());
// console.log(example.toUpperCase());
// console.log(example.split("-"));
// console.log(example.concat("ali"));
// console.log(example.slice(4,10));
// console.log(example.substring(4,10));

// let bodies = [1,4,6,8]
// console.log(bodies[1]);
// console.log(bodies.pop());
// console.log(bodies);
// console.log(bodies.unshift());
// console.log(bodies.shift(5));
// console.log(bodies.push(10));
// console.log(bodies);
// console.log(bodies.splice(0,1,5));
// console.log(bodies);
// console.log(bodies.slice(0,2));
// console.log(bodies.join("+"));
// console.log(bodies.reverse());
// console.log(bodies.filter((item)=> item% 2 == 0));
// console.log(bodies.find((item)=> item% 2 === 1));
// console.log(bodies.includes(3));
// console.log(bodies.indexOf());
// console.log(bodies.map((item)=>console.log(item)));

// 0 "" undefined false   NaN

// let time = 0;
// setInterval(function () {
//   console.log(time);
//   return (time = time + 1);
// }, 1000);

// setTimeout(function () {
//   console.log("2 second passed");
// }, 2000);

//Dom
let selected = document.querySelector(".p1");

selected.setAttribute("dir","rtl")
//  let classes = selected.getAttribute("class")
//  console.log(classes);
selected.style.backgroundColor="red"

selected.style.fontSize="50px"
selected.style.textAlign="center"
selected.style.border="solid blue 3px"
 const handleMouse=()=>{
  selected.style.color="pink"
  selected.style.cursor="pointer"
  selected.style.backgroundColor="green"

 }
 const handleLeave=()=>{
  selected.style.backgroundColor="red"
  selected.style.fontSize="50px"
  selected.style.textAlign="center"
  selected.style.border="solid blue 3px"
  selected.style.transition="backgroundColor ease-in 3000s"
 }
 const add = selected.classList.add("my")
 console.log(selected);
 
