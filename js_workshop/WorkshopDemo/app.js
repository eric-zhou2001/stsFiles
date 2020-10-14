/**
 * Part 1: Basic Text Writing
 * 
 * We want to add some text to that basic index.html page. How should we do that?
 * We have seen multiple ways of using JavaScript in pages (console logging, script
 * tagging, and finally, linking an external JavaScript file). All work when interacting
 * with the page, so we can actually write to the page whenever we want!
 * 
 * Important thing to know: JavaScript interacts with the "DOM" of the webpage. The DOM
 * stands for Document Object Model, essentially an API that allows JavaScript to
 * reach into the webpage itself to find certain classes or objects.
 * 
 * MAKE SURE TO SHOW PICTURE OF TREE HERE.
 * 
 * To first access the document, we have to declare this:
 * 
 * EXAMPLE:
 */
var exampleDocument = document;

/**
 * We are storing the "document," which is essentially the HTML page, into a variable 
 * called document. We can then access elements of the document by using two main functions:
 * 
 * EXAMPLE:
 */
document.getElementById("className");
document.getElementsByClassName("...");

/**
 * WRITE THIS.
 */







 /**
  * Actual code to play with:
  */
function incSizeLogo() {
  var logo = document.getElementById("sts-logo");
  console.log("Button is clicked.");
  var currentWidth = logo.clientWidth;
  var currentHeight = logo.clientHeight;
  if (currentWidth >= 500) {
    return;
  } else {
    logo.style.width = (currentWidth + 50) + "px";
    logo.style.height = (currentHeight + 50) + "px";
  }
}

function decSizeLogo() {
  var logo = document.getElementById("sts-logo");
  console.log("Button is clicked.");
  var currentWidth = logo.clientWidth;
  var currentHeight = logo.clientHeight;
  if (currentWidth <= 100) {
    return;
  } else {
    logo.style.width = (currentWidth - 50) + "px";
    logo.style.height = (currentHeight - 50) + "px";
  }
}