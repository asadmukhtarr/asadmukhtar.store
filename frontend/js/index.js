// string  =" alpha"
// int = numbers
// float = 3232.231
// if value will be in dubble qourts then it will be string ..
// if this will be single = then its an assignment operator ..
// if == then it will be comparison operator ..  It will compare values of variables ..
// if === then it will compare value + type  ..
// example : x === y =>  value + type  ...
// > <
// a = 3;  a+=4; 3+4 = 7   
// objects ..
// arrary's
// array within object , object within array ...
// for loop , while loop , do while , foreach ,  
var a = 3;
var b = 5;
let c = a + b;
const z = a + b + c;
var name = "Asad";
var father_name = "Mukhtar";
var x = 1;
var y = null;
var u = x + y;
var e = 3;
e+=6;
function test(){
    console.log("This Is The Simple Function");
}
const tester = () => {
    console.log('Now This Is Arrow Function')
}
function sum (a,b) {
    c = a + b;
    console.log("Sum is Here :", c);
}
const subtract = (a,b) => {
    c = a - b;
    console.log("Substraction is Here :", c);
}
students = ["Asad Mukhtar","Sheraz","Huma","Saqib","Abdul Rasheed"];
const student = {name:"Asad Mukhtar",email:"axad03213@gmail.com",whatsapp:"00000000000",location:"Lahore"};
student.age = "43 Years"
// object within array ...
const alumins = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "subjects": ["English","Urdu","Islamiat","Math"],
      "whatsapp": "+1234567890"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "subjects": ["English","Urdu","Islamiat","Math"],
      "whatsapp": "+1234567891"
    },
    {
      "id": 3,
      "name": "Robert Brown",
      "email": "robertbrown@example.com",
      "subjects": ["English","Urdu","Islamiat","Math"],
      "whatsapp": "+1234567892"
    },
    {
      "id": 4,
      "name": "Emily Johnson",
      "email": "emilyjohnson@example.com",
      "subjects": ["English","Urdu","Islamiat","Math"],
      "whatsapp": "+1234567893"
    },
    {
      "id": 5,
      "name": "Michael Lee",
      "email": "michaellee@example.com",
      "subjects": ["English","Urdu","Islamiat","Math"],
      "whatsapp": "+1234567894"
    }
]  
//console.log(alumins.length);
// get element /// createElement === NEw tag Create ..
for(let i =0; i < alumins.length; i++){
//  document.getElementById("demo").innerHTML = alumins[i].name;
  console.log(alumins[i].name);
}
var saqib = "I am saqib";
// string + string = stringstring  ...
// 3 + 4 = 34
function defualt_currency_select() {
  const baseCurrencyValue = document.getElementById("currency").value;
  const targetCurrencyValue = document.getElementById("target_currency").value;
  const amount = document.getElementById("amount").value;
  updateConvertedValue(baseCurrencyValue, targetCurrencyValue, amount);
}

function change_currency() {
  const baseCurrencyValue = document.getElementById("currency").value;
  const targetCurrencyValue = document.getElementById("target_currency").value;
  const amount = document.getElementById("amount").value;
  updateConvertedValue(baseCurrencyValue, targetCurrencyValue, amount);
}

function change_amount(amount) {
  const baseCurrencyValue = document.getElementById("currency").value;
  const targetCurrencyValue = document.getElementById("target_currency").value;
  updateConvertedValue(baseCurrencyValue, targetCurrencyValue, amount);
}

function updateConvertedValue(baseCurrencyValue, targetCurrencyValue, amount) {
  const convertedValue = (amount * targetCurrencyValue) / baseCurrencyValue;
  document.getElementById("pkr_value").value = Math.round(convertedValue * 100) / 100; // Rounded to 2 decimal places
}

// Calculator functionality
function getValue(v) {
  const input = document.getElementById("calculate");
  input.value = input.value + v;
}

function getResult() {
  const input = document.getElementById("calculate");
  try {
    input.value = eval(input.value);
  } catch (error) {
    alert("Invalid calculation!");
    input.value = "";
  }
}

function clearInp() {
  document.getElementById("calculate").value = "";
}
const name = "Faisal Khan";
console.log(name);