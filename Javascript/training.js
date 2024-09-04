// تمرین اول

// let userInput = prompt("what is your age?");

// if (userInput % 2 === 0) {
//   console.log("this is even");
// } else console.log("this is odd!");

// average

// let userAverage1 = Number(prompt("Enter number one"));
// let userAverage2 = Number(prompt("Enter number two"));
// let userAverage3 = Number(prompt("Enter number three"));

// let average = (userAverage1 + userAverage2 + userAverage3) / 3;
// console.log(average);

// pow

// let baseNumber = Number(prompt("Enter number"))
// let baseNumber2 = Number(prompt("Enter number"))

// let result = Math.pow(baseNumber, baseNumber2)
// console.log(result);

// let ageInput = Number(prompt("Enter your age?"));

// let calculated = ageInput * 365;
// let hour = calculated * 24;
// let second = hour * 60;

// console.log("you passed  " + calculated + "  days ,");
// console.log("you passed  " + hour + "  hours,");
// console.log("you passed  " + second + "  second,");

// let score1 = Number(prompt("Enter number 1"));
// let score2 = Number(prompt("Enter number 2"));
// let score3 = Number(prompt("Enter number 3"));
// let score4 = Number(prompt("Enter number 4"));
// let score5 = Number(prompt("Enter number 5"));

// let average2 = (score1 + score2 + score3 + score4 + score5) / 5;
// console.log(average2);

// switch (average2) {
//   case 20:
//     console.log("You are A grade");
//     break;
//   case average2 >= 60 && average2 < 80:
//     console.log("You are B grade");
//     break;
//   case average2 >= 40 && average2 < 60:
//     console.log("You are C grade");
//     break;
//   case average2 >= 20 && average2 < 40:
//     console.log("You are D grade");
//     break;
//   case average2 < 20:
//     console.log("You are E grade");
//     break;
// }

// let userNumber1 = Number(prompt("Enter a number!"));
// let sum = 0;
// for (let i = 1; i <= userNumber1; i+=2) {
//   console.log(i);
//   sum += i;
// }
// console.log("from 0 to  " + userNumber1 + "  = " +
// let username = prompt("Enter your username");
// let password = prompt("Enter your password");
// let confirm_password = prompt("Enter your confirm password");

// if (username.length > 5) {
//   console.log("username correct");
// }

// if (password.includes("@")) {
//   console.log("correct password");
// }

// if ((password == confirm_password)) {
//   alert("welcome");
// }

// const username = prompt("Enter your username");
// let num1 = 20
// let status1 = false
// let num2 = 20
// if(num1 > num2){
//   console.log(25);
// } else if(num1 < num2){
//   console.log("koochektar");
// } else console.log("====");

// if(!status1 && num1 > 18){
// console.log(12156);
// }
// for(let i =0; i<20; i +=2){
//   console.log(i);
// }
const random = Math.floor(Math.random() * 6 + 1);
console.log(random);
function myFunction(a = 12, b = 5) {
  console.log("salam");
  console.log(a + b);
}
myFunction(5,10);

let func2 = ()=>{
  console.log("hello");
}
func2()
