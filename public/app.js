//  SIMPLE CALCUTOR USING IF ELSE STATEMENT 


var firstNumber = +prompt("enter first number");
var operator = prompt("enter your operter", " + , - , *  , / , % ");
var secondNumber = +prompt("enter second number");

if (operator === "+") {
  document.write("Addition" + " " + (firstNumber + secondNumber));
} else if (operator === "-") {
  document.write("Subtraction" + " " + (firstNumber - secondNumber));
} else if (operator === "*") {
  document.write("Muliplication " + " " + (firstNumber * secondNumber));
} else if (operator === "/") {
  document.write("Division " + " " + (firstNumber / secondNumber));
} else if (operator === "%") {
  document.write("modulus " + " " + (firstNumber % secondNumber));
} else {
    document.write("Invalid operator. please enter one of + - * / % ");
}


