// Probleum 1 Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.

/*
// Call the function before it is declared
const result = addNumbers(5, 10);
console.log('The result is:', result);

// Function declaration
function addNumbers(a, b) {
  return a + b;
}
*/


// Probleum 2 Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

/*
// Call the function after it is declared
const result = multiplyNumbers(5, 10);
console.log('The result is:', result);
// Function expression
const multiplyNumbers = function(a, b) {
  return a * b;
};
*/


// Probleum 3 Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

/*
function addNumbers(a, b) {
  // Log the variable before it is assigned a value
  console.log('The value of the variable before assignment:', myVar);

  // Declare the variable with the `var` keyword
  var myVar;

  // Assign a value to the variable
  myVar = a + b;

  // Log the variable after it is assigned a value
  console.log('The value of the variable after assignment:', myVar);

  // Return the sum
  return myVar;
}

// Call the function and log the result
const result = addNumbers(5, 10);
console.log('The result is:', result);
*/


// Probleum 4 Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

/*
function demonstrateHoisting() {
  // Block scope
  {
    // Log the variables before they are declared
    console.log('Before declaration:');
    
    // `var` is hoisted and initialized with undefined
    console.log('varVariable before declaration:', varVariable); // undefined
    
    // `let` and `const` are hoisted but not initialized, so accessing them here will cause an error
    try {
      console.log('letVariable before declaration:', letVariable); // ReferenceError
    } catch (e) {
      console.log('letVariable before declaration:', e.message);
    }
    
    try {
      console.log('constVariable before declaration:', constVariable); // ReferenceError
    } catch (e) {
      console.log('constVariable before declaration:', e.message);
    }
    
    // Declare and assign values to the variables
    var varVariable = 'I am a var variable';
    let letVariable = 'I am a let variable';
    const constVariable = 'I am a const variable';
    
    // Log the variables after they are declared
    console.log('After declaration:');
    console.log('varVariable:', varVariable);
    console.log('letVariable:', letVariable);
    console.log('constVariable:', constVariable);
  }
}

// Call the function to demonstrate hoisting
demonstrateHoisting();
*/


// Probleum 5 Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

/*
05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
assigned a value to demonstrate the temporal dead zone.
function demonstrateTemporalDeadZone() {
  // Block scope
  {
    // Attempt to log the value of `letVariable` before it's declared
    try {
      console.log('letVariable before declaration:', letVariable); // ReferenceError
    } catch (e) {
      console.log('Error:', e.message);
    }
    
    // Declare and assign a value to `letVariable`
    let letVariable = 'I am a let variable';

    // Log the value of `letVariable` after it's declared
    console.log('letVariable after declaration:', letVariable);
  }
}

// Call the function to demonstrate the temporal dead zone
demonstrateTemporalDeadZone();
*/
