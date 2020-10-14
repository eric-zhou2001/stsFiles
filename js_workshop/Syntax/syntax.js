/**
 * Instructor note: this page should be left blank, but we will have notes here.
 * 
 * The example sections should be left here on the page, but the DEMO sections should
 * be typed out by the instructor themselves to let students have interactive
 * experiences with it.
 * ------------------------------------------------------------------------------
 * Exercise 0: Semi-colons?
 * 
 * Question: how do we write statements in JavaScript? Do we need semi-colons to signal the
 * end of a statement?
 * 
 * Example:
 */

console.log("Do I need a semi-colon??")
// console.log("Maybe I should write semi-colons to be safe...");

/**
 * It's nice to have some sort of way signaling that this is the end of the statement.
 * But even still, not required by JavaScript. Both will run successfully.
 * 
 * -------------------------------------------------------------------------------
 * 
 * Exercise 1: Variables and Boxes
 * Give introduction of Variables, as well as a quick recap since the students 
 * should have a somewhat decent grasp of it already.
 * 
 * 
 * DEMO:
 */

var x = 10;
console.log(x);
x = 20;
console.log(x); 

/** Make them type this out, look at the results. We can refer to pieces of data 
 * not explicitly of course! This is a PRIMITIVE.
 *
 * -------------------------------------------------------------------------------
 * 
 * Exercise 1.1: Keyword Declarations
 * Let the students type out "let" vs "var" vs "const."
 * 
 * DEMO:
 */
let x = 20;
var y = 25;
const z = 30;
 
console.log(x);
console.log(y);
console.log(z);

/** Notice how these all work in terms of declaring a variable. Don't go into too
 * much detail, since this is extremely confusing and to be honest I personally
 * don't know the exact specifics either. Just point out how these do exist and
 * mention how const means that we can no longer change the value stored (do a
 * z = 34958903? show it doesn't work). 
 * 
 * Stick with var.
 * 
 * -------------------------------------------------------------------------------
 * 
 * Exercise 2: Function Syntax
 * Again, we can assume that there is some knowledge behind coding/programming
 * topics. But to give a quick introduction, functions are essentially reusable
 * chunks of code. We can call the functions to do a specific operation.
 * 
 * In JavaScript, there are a bunch of different ways of defining functions.
 * 
 * DEMO:
 */

function sayHello() {
    console.log("Hello!");
}

/**
 * - The function keyword is important. It essentially lets the browser know
 *   that this next bit of code is a function. The word after the function
 *   is called the function name. We will type that function name when we
 *   want to call it.
 * 
 * - The parentheses are also required.
 *   Here, we have something called an "empty parametered function." 
 *   Parameters serve as input that we pass into the functions.
 * 
 * - The braces represent the code that will be run whenever the function is
 *   called.
 * 
 * - Return keyword signals that this is the end of the function. Upon reaching
 *   the word return, the function will stop and go back to the location it was
 *   called from. We can also "return" values from this function so that it can 
 *   be used in the future.
 */

// Get them to type this. This is really key! Shows how we can call
// functions!
sayHello();
sayHello();

/** 
 * DEMO:
 */

function sayBye(message) {
    console.log("We say: " + message);
}
// Message as the parameter.

sayBye("Goodbye! Adios! Ciao!");
sayBye("No! Don't go yet!"); // :(
// Notice how the input (or argument) into the function varies depending
// on what we enter. This variability is what makes functions so powerful.

/**
 * Ask questions, note that we will be running an example of this soon.
 * 
 * Important DEMO:
 * 
 * Now that we have a better idea of what functions can do. Let's try to 
 * create a function adds two numbers together.
 */

 function addTwo(num1, num2) {
     return num1+num2;
 }

 /**
  * -----------------------------------------------------------------------
  * Exercise 2.1 - Alternative Function Declarations
  * 
  * JavaScript has the option to specify functions in many different ways. We
  * have seen the function keyword declaration, so let's take a quick peek into
  * JavaScript's (1) arrow function, (2) anonymous functions.
  * 
  * 1) Arrow Functions
  * 
  * EXAMPLE:
  */
var arrowFunctionExample = () => {
    console.log("This is an example of an arrow function!");
}
/**
 * Notice the => arrow indicator. There is a lot of nuance in these functions,
 * so be careful when using them. We will stick to function for this workshop.
 * 
 * 2) Anonymous Functions
 * 
 * EXAMPLE:
 */

 var anonymousFunctionExample = function() {
     console.log("I'm anonymous!");
 }

 /**
  * Anonymous functions have no clear name. Arrow functions resemble that since
  * there is no clear name specified. To access these functions, we can run these 
  * commands:
  * 
  * DEMO:
  */

arrowFunctionExample();
anonymousFunctionExample();

/**
 * We have to call them by their respective variable name.
 */