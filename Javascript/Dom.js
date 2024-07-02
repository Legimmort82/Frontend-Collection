// Selecting a tag
document.getElementById;
document.getElementsByClassName;
document.getElementsByTagName;
document.querySelector;
document.querySelectorAll;

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
const time = new Date();

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
