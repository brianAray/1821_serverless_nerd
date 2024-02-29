// console.log("Hi I am connected!")

const titleElementById = document.getElementById("title");

// console.log(titleElementById);

const elementsByClassName = document.getElementsByClassName("highlight");

// console.log(elementsByClassName);

const elementsByTagName = document.getElementsByTagName("p");

// console.log(elementsByTagName);

// CSS Query Selectors
// We can use CSS selectors within JS dom selection

const elementByCssSelector = document.querySelector("#paragraph_1");

const elementsBySelectorAll = document.querySelectorAll("li.highlight");
// console.log(elementByCssSelector);
console.log(elementsBySelectorAll);

// console.log(document);

// Traversing the DOM
/**
 * THis is navigating through the structure of the html to access elements, their attributes, and their content
 * JS provides various methods and properties for traversing the dom tree
 */

// Parent and Child Relationships
// You can traverse up and down the DOM tree to access parent and child elements

const parentElement = titleElementById.parentElement;
const parentNode = titleElementById.parentNode;

// console.log(parentElement);
// console.log(parentNode);

const paragraphContainer = document.querySelector("#paragraph_container");
const paragraphContainerChildren = paragraphContainer.children;

// console.log(paragraphContainerChildren[0]);

// Sibling Relationships
// You can traverse sideways through the DOM

const nextSiblingElement = elementsByClassName[0].nextElementSibling;
console.log(nextSiblingElement);

/**
 * DOM Manipulation
 *
 * DOM manipulation lets you interact and modify the DOM of a web page
 * It allows you to dynamically update and change the content, structure, and style of a web page in response to user actiosn or other events
 */

// Modify Elements

setTimeout(() => {
  const titleElement = document.querySelector("#title");
  titleElement.textContent = "New Text Content";
}, 2000);

// Create Elements

const newElement = document.createElement("p");
newElement.id = "remove_me";
newElement.innerHTML = "<strong>New Paragraph</strong>";

document.body.appendChild(newElement); // Add the new element to the DOM

// removing elements

setTimeout(() => {
  const elementToRemove = document.querySelector("#remove_me");
  elementToRemove.parentElement.removeChild(elementToRemove);
}, 2000);

// styling elements
newElement.style.color = "yellow";
newElement.style.backgroundColor = "blue";

/**
 * Events and Listeners
 *
 * Events and event listeners are essential for browser js
 * They let you make your page interactable and responsibe
 * JS lets you attach event listeners to html elements, which listen for specific events and execute code in response
 *
 *
 * Events:
 *  - Actions or occurrences that can happen in the browser, such as a user clicking button
 *  - HTML elements can generate events, and JS can detect and respond to them
 *  - Common ones are click, mouseenter, keydown, submit, load, etc
 *
 * Events Listeners:
 *  - Event listeners are JS functions that listen for specific events on HTML elements
 *  - When the event occurs, the event listener function is executed
 */

const buttonElement = document.createElement("button");
buttonElement.textContent = "Click Me!";

// attaching event listener

// Event Object
// When an event occurs, an event object is created and passed to the event listener function
// The event object contians information about the event, such as the target element, event type, and any other event specific data

let buttonFunction = (event) => {
  console.log(event.target);
  alert(`${event.target} clicked!`);
};

buttonElement.addEventListener("click", buttonFunction);

document.body.appendChild(buttonElement);

// Removing Event Listeners
// These can be removed using the removeEventListener()
// You have to provide the same event type and callback function used when attaching the listener

// buttonElement.removeEventListener("click", buttonFunction);

// Event Bubbling and Event Capture

let paraContainer = document.querySelector("#paragraph_container");
let para = paraContainer.children[0];

paraContainer.addEventListener("click", () => {
  alert("div clicked");
}, true);

para.addEventListener("click", () => {
  alert("paragraph clicked");
}, true);


/**
 * Capturing looks for events in the outermost elements first to resolve, and then move towards the inner most functions
 * 
 * Bubbling looks for the innermost elements events first and then propogates outwards
 * 
 * The default behavior is bubbling, and to set it to be capturing you must add a third true value when adding the event listener
 * 
 * element.addEventListener("event", eventFunction, true);
 */