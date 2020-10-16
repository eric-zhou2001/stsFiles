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

  // PART ONE: CLICK
function incSizeLogo() {
  var logo = document.getElementById("sts-logo-click");
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
  var logo = document.getElementById("sts-logo-click");
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

// PART 2: HOVER

// Talk about passing (this) as an argument
function floatRight(logo) {
    console.log("Hovering over Logo!");
    // Demonstrate above
    var float = logo.style.cssFloat;
    if (float == "right") {
        logo.style.cssFloat = "left";
    } else {
        logo.style.cssFloat = "right"
    }
}

// Part 2: Hover vs. Leave
function doubleSize(logo) {
    logo.style.width = (logo.clientWidth* 2) + "px";
}

function halfSize(logo) {
    logo.style.width = (logo.clientWidth* (1/2)) + "px";
}

// Part 3: more complex event listeners.
function displayLines() {
  var numLines = document.forms["display-lines"]["lines"].value;
  console.log("Will now display " + numLines + " number of lines!");
  var lineContainer = document.getElementById("lines");
  // Additional, funky logic!
  if (numLines < 0) {
    console.log("Error! please enter a non negative number!");
  }
  for (var i = 0; i < numLines; ++i) {
    lineContainer.innerText = lineContainer.innerText + "-";
  }
}