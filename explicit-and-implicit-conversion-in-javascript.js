/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
let subtractionAnswer = "54" - 50;
console.log(subtractionAnswer);// implicit - expected 4

let additionAnswer = Number("600") + 100;
console.log(additionAnswer);// explicit - expected 700

let result = Number("5") - 2;// Casted string to number
console.log("The result is: " + result);

let isRaining = "false"
let isValid = isRaining === "true";// removed cast because provided value was non-empty string. 
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");//casted to number
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
