# HTML

HTML stands for Hypertext Markup Language. It is the standard markup language used to create web pages. HTML defines the structure and layout of a web page using a series of elements, such as headings, paragraphs, images, and links.

HTML is used in conjuction with other languages like JavaScript and CSS to create dynamic and interactive web pages.

A web browser has an interpreter to convert our markup language into pixels to be displayed on the browser. HTML is the markup language that the itnerpreter understands, and we can write it in an established structure that the browser expects. The language is quite forgiving, in that the browser will attempt to fix any broken HTML in order for it to still be interpretable.

When we are writing HTML, we are defining the structure of the webpage in large blocks called elements that the web page will use and convert into something that can be displayed. An element consists of 3 parts:

1. The opening tag
2. The content
3. The closing tag.

## Tag

A denotation of the start and end of a block of data

Let's use the <p> tag which defines a paragraph. If we want a paragraph to appear on the webpage, we would write in the file

`<p></p>`

This line begins and ends with the same syntax <p>, the difference being the / that is added to the closing tag. The / tells the interpreter that the element is finished, and so any tag that has a / in front is referred to as a closing tag.

## Content

Literal text or other elements contianed between an elements opening and closing tag

`<p>Hello</p>`

No the webpage would render this as a paragraph with text that says "Hello". A paragraph element that has the content "Hello".


## Common Tags

- `<html>`: Defines the entire HTML document
- `<head>`: Defines the head of the document, which contains metadata such as the title of the page
- `<body>`: Defines the body of the document, which contains the content that is displayed in the browser
- `<p>`: Defines a paragraph
- `<h1>`: Defines a level 1 heading, and goes up to 6
- `<img>`: Defines an iamge
- `<a>`: Defines a hyperlink
- `<div>`: Defines a section of the document
- `<span>`: Defines a small section of the document, used to apply styles to specific parts of the text
- `<ul>`: Defines an unordered list

## Semantic Markup

The practice of using tags with special meaning in their specifically designed purpose in order to convey the meaning of the webpage to assitive technology

With CSS, you can format any tag to look like anything you want, even other tags. By using the correct semantic tags, it doesn't affect what is displayed on the screen too much, it simply groups it together in a logical and readable format for the developers and any users that use assitive technologies to interact with a browser.

## HTML DOM

HTML Document Structure where DOM is Document Object Model, refers to the way in which different elements of an HTML document are organized and nested within each other. An HTML document is made up of a series of tags, which define the structure and layout of the page.

The basic structure, requires these three tags:

- `<html>`: The root element of an HTML document and contains all other elements on the page
- `<head>`: The element containing all the metadata about the document, such as title of the page
- `<body>`: The element containing the visible contents of the page

The body can be further divided into sections using tags like:
- `<header>`
- `<nav>`
- `<main>`
- `<article>`
- `<aside>`
- `<footer>`

The three main tags compose the document. The structure should be maintained, and the browser will attempt to do that if it receives broken HTML. This structure can be viewed as a tree that follows a hierarchy of points called nodes, leading up to a single node called the root.

```HTML
<html>
|
|\
| <head>
|       \
|        \
|
<body>
    \
    | \
    |  <nav>
    |       \
    \        <p>
     \
      \<main>
```    

## DOM

Stands for the Document Object Model. A representation of the HTML document in memory. It is generated and can be manipulated by Web API's to change the look of the page as it is being viewed.

When the page gets rendered by the browser, the DOM is used to represent our page behind the secenes gets added to it. Typically we use JavaScript to manipulate the DOM, but we can use any language as any Web API can interact with the DOM.


## Elements and Attributes

We've seen them already in some examples like the image tag.

### Element
An opening tag, a closing tag, and all the content in between them.

### Attribute
A key value pair used to set various properties of a tag. These are always set in the opening tag.

The terms tag and element are often used interchangeably, which is confusing. The functionaltiy and structure is determined by the tag, but the entirety from start to finish is referred to as the element.

Anatomy of a HTML Element

```text
<p class="nice">Hello World</p>

<p> is the opening tag
class="nice" is the attribute and its value
Hello Worl is the enclosed text content
</p> is the closing tag
```

The entire thing is called the element, but the look and feel of the element is set by what tag we use.

## Inline vs Block Elements

We've seen a number of elements already, with each having unique looks and feels. Two elements in this example that we will be studying is `<p>` and `<span>`.

```html
<p>foo</p>
<span>Bar</span>
```

### Result
```
foo

Bar
```

```html
<span>Foo</span><span>Bar</span>
```

### Result

```
FooBar
```

### Inline

An element display style in which the element will stretch to take up only as much space as its content

### Block

An element display style in which the element will stretch to take up the entire width of their container. It will always begin on a new line and it will always be followed by a new line.


### Examples

Block Elements
- `<h1> - <h6>`
- `<p>`
- `<div>`
- `<ol>, <ul>, <li>`
- `<table>`
- `<section>`

Inline Elements
- `<a>`
- `<span>`
- `<input>`
- `<label>`
- `<cite>`


## Global Attributes

Global attributes are those that can be applied to any element on the page, some key ones are:

- class: The class attribute is often used to point to a class name in a stylesheet. It can also be used with JS for manipulating specific class elements
- id: The id attribute gives a unique id to an element. THe value of the id attribute must be unique within the HTML document. 
- hidden: The hidden attribute is a boolean attribute. When present, it specifies that an element is not relevant and the browser should not display it
- style: THe style attribute is used to add styles to an element, like color, font, size, and more

## Input Elements and Input Types

An HTML form collects information from input elements. We will specify an additional attribute named type to indicate which field to display. Various fields can be created such as the text field, checkbox, password field, or radio button.

### Button

A button element is used to represent a button on the screen with no additional functionality

```html
<input type="button" value="this is a button">
```

### Text Field

A text field is a one-line input field that allows the user to input a line of text.

```html
<form>
    <label for="email-input">Email Input</label><br/>
    <input type="text" name="email-input">
</form>
```

### Password Field

```html
<form>
    <label for="user-password">Password</label><br/>
    <input type="password" name="user-password">
</form>
```

### Radio Buttons
Radio buttons are used to let the user select exactly one value from a list of predefined options.

```html
<form>
    SELECT FAVORITE
    <br/>
    <input type="radio" name="favorite-fruit" id="apple">
    <label for="apple">Apple</label><br/>
    <input type="radio" name="favorite-fruit" id="banana">
    <label for="banana">Banana</label><br/>
    <input type="radio" name="favorite-fruit" id="grapes">
    <label for="grapes">Grapes</label><br/>
</form>
```

## Forms

Forms are a way to gather user input in HTML and can be created using the `<form>` tag. This tag is used to define a form and contains form elements such as text fields, checkboxes, radio buttons, and submit buttons.

```html
<form id="login-form">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username">
    <br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password">
    <br>
    <input type="submit" value="Submit">
</form>
```

### Select and Multi Select
The select element is used to create a drop-down list. It is most often used in a from, to collect user input.
The name attribute is needed to reference the form data after the form is submitted. If you omit the name attribute, no data from the drop down list will be submitted.

The id attribute is needed to associate the drop-down list with a label.
The option tags inisde the select element defines the available options in the drop-down list.

```html
<form>
    <label for="select">Select Fruit:</label><br>
    <select id="select" name="select">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="kiwi">Kiwi</option>
    </select>
    <br>
    <input type="submit" value="Submit Button">
</form>
```

If you wanted multiple selection options, there is the `multiple` boolean attribute that allows the user to select more than one option. We can modify the above code to select more than one fruit by adding the multiple attribute to the select tag.

```html
<select id="select" name="select" multiple>
```

The submit button allows the user to send the form data to the web server. You can define a submit button by specifying the type attribute as "submit".

```html
<input type="submit" value="Submit">
```

There is also the reset button, that will reset the form data and will display any default values. You can define a reset button using the type attribute "reset"

```html
<input type="reset" value="Reset">
```

## Attributes used in HTML Forms

- action
    - The action attribute indicates where the form data will be processed. Typically the URL of the server
- target
    - Used to speicfy whether the submitted results will open the current window, a new tab, or new frame. The default value is "self" which is the same window. For a new window, use "blank"
- name
    - should be provided for each input element. It is not required, but hte value provides a label for the data once the form is submitted. If it is not specified in an input field then the data will not be sent from that field
- method
    - Used to speicify the HTTP method used to send data while submitting forms, only two options GET and POST
- value
    - Specifies an initial value for the input field. It also serves as the attribute when providing a button a label
- placeholder
    - Used to give a hint to describe the expected data in the form.
- required
    - Required attribute indicates that an input field must be filled out before submitting the form. Most modern browsers prevent form submission until these fields are filled out
- min and max
    - Used to specify the range of values allowed in an input field. This only works with these input types: number, range, date, datetime-local, month, time, and week.

```html
<form action="http://localhost:3000/login", target="_blank" method="GET">
    <label for="name">Name:</label><br>
    <input type="text" required placeholder="Mark">
    <br>
    <input type="reset" value="Reset">
    <input type="submit" value="Submit">
</form>
```