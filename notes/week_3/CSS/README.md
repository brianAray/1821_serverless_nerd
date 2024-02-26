# CSS

CSS stands for Cascading Style Sheets. It is a language for styling HTML documents by specifying certain rules for the layout and display of elements with key value pairs. 

A CSS consists of a set of rules that defines the webpage. This syle sheet contains selectors and declarations. The selector is an HTML element, and the declaration is comprised of a property and a value surrounded by curly braces.

```css

h1 {
    color: red;
    font-family: Arial;
    font-style: italic
}
```

## Inline, Internal, and External Stylesheets

There are three types of CSS:
- Inline
- Internal or Embedded
- External

### Inline CSS

Inline CSS contains the CSS property in the body section attached with an element. This kind of style is specified when using the style attribute in a HTML tag.

```html
<p style="color: crimson; font-size: 50px; text-align: center">
    Lorem ipsum dolor sit.
</p>
```

### Internal or Embedded CSS

This can be used when a single HTML document must be styled uniquely. The CSS rule set must be placed in the head section.

```html
<head>
<title>CSS Examples</title>
<style>
    h1 {
    color: red;
    font-family: Arial;
    font-style: italic;
    }

    h2 {
    color:blue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow';
    }
</style>
</head>
```

### External CSS

External CSS contains separate CSS files which contains only style property with the help of tag attributes (class, id, heading, etc). CSS in a separate file, must have the .css extension and should be linked to the HTML document using the `<link>` tag.

```html
<head>
    <link rel="stylesheet" href="./css_example.css"/>
</head>
```

Linked CSS File
```css
body {
    background-color: darkcyan;
}
```

The order in which styles are applied are like so: External, Internal, then Inline. This means that any style applied as inline CSS will always override external and internal CSS even with clashing properties that are being applied styles.

## CSS Box Model

The CSS Box Model is used to determine how a web page is rendered by a browser. It considers each element on the page as a box, and with CSS it allows you to apply different properties that define where and how that element appears.

```
|Margin|Border|Padding|Content|Padding|Border|Margin|
```

Every box has 4 parts - margin, border, padding, and content. The margin is the outermost box, then the border, then padding, then finally content being the innermost.

- Margin:
    - The outermost. Useful for separating elements from its neighbor. The dimensions are given by the margin-box width and the margin-box height
- Border:
    - The area between the box's padding and margin. The dimensions are given by the width and height of the border
- Padding:
    - The space around the content area and within the border box. It's dimensions are given by the width and height of the padding-box
- Content:
    - It consists of content like text, image, or other media.

```css
#box_example{
    width: 300px;
    height: 300px;
    padding: 10px 30px 10px 10px;
    border: 2px solid blue;
    margin: 20px;
}
```

## CSS Properties

There are a number of CSS properties that we can use to style our page.

- Border
    - `border-width: medium 10px thick 15px;`
    - `border-style: dotted;`

- Padding
    - `padding: 70px;` Sets the padding to 70 pixels for four sides
    - `padding: 35px 45px 30px 10px;` Sets the padding from top clockwise in the order it was written

- Color
    - The color property is used to specify the foreground color of text
    - There are 5 different color notations
    - ```css
        a {color: red;}
        div {color: #3c5;}
        h1 {color: #ffa500};
        div {color: rgb(100, 20, 255);}
        div {color: rgb(30%, 50%, 80%);}
        div{color:rgba(132, 104, 187, 0)}

- Text-align
    - ```css
        div{text-align:left;}
        h1{text-align:right;}
        div{text-align:justify;}
        div{text-align:center;}


## Element Selectors

The element selector selects HTML elements by their name / tag name like `h1` or `a`.
The element selector is a way to select all the elements with a given tag name in a doucment, and apply the same styles to each element with the tag name. You should not write the angle brackets around the element with CSS.

```css
p {
    text-align: center;
}
```

### Class and ID Selectors

The class selector is a name preceded by a period `.`. It uses the class attribute of an HTML element to match the specific HTML element. We can have a class selector specific to an HTML element like `p.class` which will select an element of type paragraph that has the class property name "class".

### Class Selector
```css
p.paragraph_class{
    color: rgb(108, 9, 67)
}
```
The above example will only apply the style to paragraph elements that have the class attribute "paragraph_class".

### ID Selector
The ID selector name should be preceded by a `#`. It uses the ID attribute of the HTML element to match the specific HTML element.

```css
#specific_paragraph{
    color: #22e23c
}
```
ID selector is the most spefific selector, and so will override any styles except another id selector. In that case, it is based on which one is applied last.

## Sibling Selectors

### Adjacent Sibling Combinator Selector
An adjacent sibling combinator selector allows you to select an element that is directly after another element

```css
p + p { font-size: smaller; } /* Selects all paragraphs that follow another paragraph */
```

### General Sibling Selector

Very similar to the adjacent sibling combinator selector but the element being selected doesn't need to immediately succeed the first element, but can appear anywhere after it.

```css
p ~ p { font-size:smaller;}
```

### Universal Selector

The universal selector denoted by an asterisk `*`, matches all the elements on the page. If any other specific selector exists on teh element, then the universal selector will be omitted.

```css
* { background-color: red;}
```

### Attribute Selector

The attribute selector is used to specify an element that contains a specific attribute or an attribute with a specific value. This is doen using the name of the attribute inside a square bracket `[]`.

- `[attribute]` Selector
    - Used to apply the style rule for all the elements which has a specified attribute
- `[attribute="value"]` Selector
    - Uses the `=` operator to select elements whose attribute match the value exactly
- `[attribute^="value"]` Selector
    - using the `^=` operator to select elements that have the specified attribute and with a value beginning exactly with a given string


### Grouping Selector
The CSS grouping selector is used to apply a common style for the page. You can group the selectors using a comma separated list. This applies the same properties and rules for more than one element at a time.

```css
h1, h2, p {
    font-family: Arial;
    color: blue;
}
```

### Child Selector

These will select the children of a specified element. The syntax uses a `>` to indicate which element is the parent and which is the child.

```css
div > p {
    background-color: red;
}
```

### Descendant Selector

The descendant selector selects all the elements which are a child of the element. It allows you to limit the targeted elements to the ones who are descendants of another element.

```css
div p {
    background-color: red;
}
```

## Responsive Web Design

This is the approach that allows websites and pages to render on all devices and screen sizes by automatically adapting to the screen that it is being displayed on. This works using CSS by having different settings to serve different style properties depending ont he screen size, orientation, resolution, color capability, and other characteristics of the user's device. It combines flexible grids, flex boxes, flexible images, and media queries.

### CSS3 Mesia Queries

CSS3 supports responsive web design, all kinds of transitions, transformations, and animations and provides box-sizing tools that enable the user to adjust the size of any element without changing the dimensions or padding of the element.

```css
#media not|only mediatype and (mediafeature and|or|not mediafeature){
    css code
}
```

Media Types:
- all : used for all media type devices
- print : used for printers
- screen : used for screens like computers, tablets, smart phones, etc
- speech : used for screen readers that reads the page aloud

Media Features:
This describes the specific characteristics of the user agent, output device, or environment.
- grid
- height
- width
- hover
- max-aspect-ratio
- max-color
- max-height

Logical Operators:
Used to compose a media query

```css
@media only screen and (max-width: 600px){
    body{
        background-color: red;
        font-family: Arial;
    }
}
```


## Flexbox
This is a one-dimensional layout method for arranging elements in rows or columns. 
In any flexbox layout, the first step is to create a flex container. THe flex container is an area of document laid out using flexbox. We can define it like so

```css
.flex-container{
    display: flex;
}
```

The items being represented as flexible boxes inside the flex container are called flex items. The direct children of the flex container are called flex items.

Properties of Flex Container:
- `flex-direction` : used to change the direction of the flex items display.
- `flex-wrap`: used to define the felx items that should wrap or not
- `justify-content`: used to align the flex items within the container

Properties of Flex Items:
- `align-items`: used to align the flex items vertically
- `order`: used to define the order of the flex items
- `align-self`: used to define the alignment for a specific flex item which can override the default alignment

## CSS Grid

The CSS grid layout excels at diving a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

Like tables, grid layout enables you to align elements into columns and rows. However, CSS grid is far more flexible than using tables. A grid container's child elements could position themselves so they actually overlap and layer, like CSS positioned elements.

```css
.wrapper{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
}
.one {
    grid-column: 1 / 3;
    grid-row: 1
}
.two {
    grid-column: 2/4;
    grid-row: 1/3;
}
```

## Bootstrap
Bootstrap is an open-source framework and mobile-first approach to developing responsive websites. It is a front-end framework programmed to support both HTML5 and CSS3.

### Bootstrap Grid System
The bootstrap grid system consists of series of containers, rows, and columns to layout and align content. It creates a responsive layout and is built using grids and flexboxes.

Containers:
To specify a container, there are two container classes that we can use
- `.container`: used to provide a fixed width container
- `.container-fluid`: used to provide a full-width container that spans the entire width of the viewport

```html
<div class="container">
    This is a fixed container
</div>
<div class="container-fluid">
    This is a fluid container
</div>
```

Rows:
Bootstrap rows are horizontal slices of the screen. THey are only used for containing columns or a wrapper for columns. They have to be placed in contianers to avoid the horizontal scroll on the page. 

```html
<div class="row">
...
</div>
```

Columns:
`.col` class is used to set the width for the column dynamically. Grid system supports a maximum of 12 columns in a row and anything after that will be shifted to the next row.
You can set the wsize for the colum (ranging from 1 to 12).
```html
<div class="row">
    <div class="col-3">
        this is col-3
    </div>
    <div class="col-5">
        this is col-5
    </div>
    <div class="col-7">
        this is col-7
    </div>
</div>
```

Also, we can set breakpoints for columns and this is used to specify the screen resolution.

- `.col-sm`: used for small devices with a width of equal or greater than 576px
- `.col-md`
- `.col-lg`
- `.col-xl`

### Bootstrap Tables
This is used to style HTML tables and to change the default styles for them. To add bootstrap to a table, add the class `table` to it.

```html
<div class="container">
    <table class="table">
        <tr>
            <th>Header</th>
        </tr>
        <tr>
            <td>Item 1</td>
        </tr>
        <tr>
            <td>Item 2</td>
        </tr>
    </table>
</div>
```