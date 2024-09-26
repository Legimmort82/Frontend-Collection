//number type
let x: number = 121;

//boolean type
let loginIn: boolean = true;

//string type
let myName: string = "ahmad";

//object type
let person: {
  name: string;
  age: number;
} = {
  name: "ali",
  age: 20,
};

//array type
let skills: number[] = [1, 2];

//tuple type
let custom: [string, number] = ["fdsddf", 123];

//enum type
enum Personal {
  NAME = "ali",
}
let persons: {
  name: string;
  age: number;
} = {
  name: Personal.NAME,
  age: 20,
};

//null & undefined type
const q: null = null;
const unde: undefined = undefined;

//union type
const seperated: string | number = 61;

//aliases type
type nALiases = string | number;
const both: nALiases = "hello";

//function
let Add: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

//unknown type
let b: unknown;
