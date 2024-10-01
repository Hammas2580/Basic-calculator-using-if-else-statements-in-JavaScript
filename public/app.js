//  SIMPLE CALCUTOR USING IF ELSE STATEMENT 


var firstNumber = +prompt("enter first number");
var operator = prompt("enter your operter", " + , - , *  , / , % ");
var secondNumber = +prompt("enter second number");

if (operator === "+") {
  console.log("Addition" + " " + (firstNumber + secondNumber));
} else if (operator === "-") {
  console.log("Subtraction" + " " + (firstNumber - secondNumber));
} else if (operator === "*") {
  console.log("Muliplication " + " " + (firstNumber * secondNumber));
} else if (operator === "/") {
  console.log("Division " + " " + (firstNumber / secondNumber));
} else if (operator === "%") {
  console.log("modulus " + " " + (firstNumber % secondNumber));
} else {
    console.log("Invalid operator. please enter one of + - * / % ");
}



