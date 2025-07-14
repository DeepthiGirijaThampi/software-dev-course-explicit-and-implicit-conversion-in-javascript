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


// Bug 1: "5" is a string, so "5" - 2 works due to implicit conversion, but it's better to be clear.
let result = Number("5")- 2; // Explicitly convert string "5" to number
console.log("The result is: " + result); // Output: The result is: 3

// Bug 2: "false" is a string, so Boolean("false") is true, which is unexpected

let isValid = Boolean(false); 
if (isValid) {
    console.log("This is valid!");
}else {
    console.log("This is not valid!");
}

// Bug 3: age is a string, so age + 5 results in string concatenation (e.g., "255")
let age = Number("25"); // Explicitly convert string "25" to number
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

/*
Part 2: Type Conversion Examples
*/
// Implicit type conversion example
let implicitProduct = "10" *  2; // Implicit conversion of string "10" to number
console.log("Implicit Conversion Result: " + implicitProduct); // Output: Implicit Conversion Result: 20
// Explicit type conversion example
let explicitSum = Number("100") + 5; // Explicitly convert string "100" to number
console.log("Explicit Conversion Result: " + explicitSum); // Output: Explicit Conversion Result: 105
let user;
console.log("Original value:", user); // Output: undefined