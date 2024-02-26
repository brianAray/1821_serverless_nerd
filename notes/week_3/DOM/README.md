# DOM

JavaScript Document Object Model, is a module available on any JavaScript that is run in the browser. Typically in Node JS, you have to import in any packages that are not available directly but the DOM is available without it and does not require any importing.

Modern Browsers have JavaScript running on them, and so JS code can be provided by a server to run on client side. Running client side JavaScript allows us to create dynamic web pages that respond based on a users interaction with the page.

The structure of the DOM is like a tree, with the root element being the HTML tag. 

## DOM Structure

The Document Object Model (DOM) is a programming API for HTML and XML documents. It enables JS to access and manipulate the elements and styles of a website. The browser creates a tree-like hierarchical representation of the HTML document, which is known as the DOM structure or DOM tree.

Each HTML element in the DOM tree is an object. The positions of the elements in the DOM tree are nodes. THe tags are element nodes. Attributes in the elements are attribute nodes. The text inside elements are text nodes. 

Each node in the DOM tree has properties and methods that can be used to access and manipulate its content and attributes. For example, `innerHTML` property can be accessed and used to get or set the content of an element., and `className` can be used to get or set the class attribute of an element.

## Traversing the DOM

The DOM allows us to do anything with elements and their contents, but we first need to reach the corresponding DOM object. The properties used to traverse the DOM or to reach/get a particular DOM object are listed below.

- Topmost node `document`: This is the document object, the root of every node in the DOM.

`document.documentElementProperty` - This refers the DOM node of the tag, and the property associated with that node

- Parent Nodes `node.parentNode`:
    - The parent of a node is anything that is directly one level up it.
- Child Nodes:
    - The children of a node that are the nodes one level below it.
    - `childNodes` refers to all the nodes that are children to an element
    - `children` refers to all the elements that are children to an element
- Sibling Nodes:
    - These are for children elements/ nodes, when they are of the same parent
    - Sibling nodes must be on the same tree level as well
    - `nextSibling` will refer to the next node
    - `nextElementSibling` will refer to the next element

## Selecting Elements from the DOM
JavaScript is used to get or modify the content or value of the HTML elements on the page. To perform any action on the HTML element, we need to select the target of the HTML element.

Four way that can be used:

1. Selecting Elements by ID
    - The `document.getElementById()` method is used to select an element based on its unique ID. THe method will return the element as an object if the matching element has been found, or null if no matching element is found on the page
2. Selecting Elements by Class name
    - The `document.getElementsByClassName()` method is used to select all the elements having the specific class names. This method returns an array-like object of all child elements which have all the given class names
3. Selecting Elements by Tag Name
    - The `document.getElementsByTagName()` method is used to select HTML elements by tag name. This method also returns an array like object with all the children with the given tag name
4. Selecting Elements with CSS Selectors
    - We can also use `document.querySelector()` and `querySelectorAll()` methods to select elements that matches the specified CSS selectors. The `querySelector()` will return only the first element it finds, the `querySelectorAll()` will return an array with all the found matches.

## DOM Manipulation

We can add, remove, replace, and copy any element into a DOM tree.

### Create Elements

The `createElement()` method is used to create a new element that can then be attached to the DOM tree. It requires a tag name, without the angle brackets.

```javascript
document.createElement("tagName");
```

### Replace Child Elements

The `replaceChild()` method is used to remove an element from the DOM tree and insert a new one in its place. It works with nodes, not elements. To replace an element, you would have to find it's position in the DOM tree, and directly remove it from there.

### Remove Child Elements

The `removeChild()` method removes an element from the DOM tree

### Append a Node
The `appendChild()` method is used to add a node to the end of the list of child nodes of a specified parent node.

### Insert a Node before Another
The `insertBefore()` method is used to insert a node before another node as a child node of a parent node.
There is no `insertAfter()` method with the DOM. You would have to do it manually.

### Get or Set Text of a Node
The `textContent` property is used to get and set a text content inside a particular node

### Get or Set HTML of an Element
The `innerHTML` property gets  the text and inner HTML of the element, updating this will update the existing text and inner tags inside an element with new content.

`innerHTML` vs `textContent` - The `innerHTML` property returns the text and inner HTML elements. The `textContent` property returns only the text content.

### Clone a Node

The `cloneNode()` method is used to clone an element. The `cloneNode()` method accepts an optional parameter, if it is true, then the original node and all of its descendants are cloned. If it is false, then just the original node is cloned.

### Managing Attributes

If you want to grab a specific attribute of a node, use `getAttribute(attributeName)` method which is used to get the value of an attribute on a specified element. Using this we can work with the attributes with these methods:
- `getAttribute(attributeName)`: used to get an attribute from a specified element
- `removeAttribute(attributeName)`: used to remove an attribute from a specified element
- `setAttribute(attributeName, attributeValue)`: used to add an attribute to a specified element


## Events and Listeners

Events occur when a user interaction takes place on a web page, such as when the end-user has clicked a link or button, pressed a key on their keyboard, submit a form, or move the mouse, etc. The browser also has events for when the page loads and unloads.

When an event occurs, we use JS event handlers (or an event listener) to detect them and perform a specific task.

- `onclick`:
    - This is a click event when a user clikcs the element on a web page
- `ondbclick`:
    - This is a double click event when a user clicks an element twice on a web page
- `onload`:
    - This is when the browser has finished loading the page
- `onunload`:
    - When the browser has closed, or the user tries to close the document
- `onmouseover`:
    - When the user mouse hovers over the element

### Listeners

An event listener is a function in JS that waits for an event to occur. The `addEventListener()` function is an inbuilt function in JS used to handle the event.

The syntax being:

```js
element.addEventListener("event", function, useCapture);

```

Where:

- event:
    - Specifies the name of the event
- function:
    - Specifies the function to run when the event occurs
- useCapture:
    - An optional parameter that takes a boolean value. If it is true then the event handler is executed in the capturing phase. If it is false then it will be done using the bubbling phase.


## Bubbling and Capturing

In Event Bubbling, the event propagates from the target element to its parents, then all its ancestors that are on the way to the top. Bubbling follows the Bottom to Top approach. This is the default behavior and does not need to be specified when adding an event to an element. There are two ways to add a bubbling event

```html
<div onclick="alert('div was clicked')"></div>
```
or
```javascript
// assuming we have already selected the element
div.addEventListener("click", functionToBeRan, false);
// false is not necessary as it is by default false
```

Captuing is the opposite of bubbling, when an event occurs on an element, it first propagates to the root element then to its parents and so on all the way down to the element itself. This way the event propagation is called caputing because the event captures the hierarchy of elements.

```javascript
div.addEventListener("click", () => {alert("I have been clicked")}, true);
```