# CSS

CSS stands for Cascading Style Sheets
It is a style sheet language used to control the presentation and layout of web documents

CSS separates the contents of the page from its presentation, this separation enhances maintainability and makes it easier to apply consistent styles

We use a number of selectors to specifiy what element that we want to stylize, this can range from tag name, target elements, class, ID, etc

We work off of properties and values when trying to stylize an element

```css
p {
  color: blue;
  font-size: 16px;
}
```

The cascading nature of CSS refers to the order of importance and specificity of styles being applied to an element
Styles can be inherited from parent elements, defined in external stylesheets, or applied inline.

## CSS Box Model

![CSS Box Model](https://lh3.googleusercontent.com/proxy/uWwqyh42G1ZhI_drd0LxcamU54mx1Uoge5P0IUsOnolb_Ae2mVLVLdjijYGe9bVaKuKMD2aSxvnaHNq1pRbVjuRcLNNuV8vXOd0wcKgJLtRRCaHqNgVkc0s)

The box model is something that every element on a html web page has:

- Content
    - Innermost area of an element's box, where the actual content such as text or image is displayed
- Padding
    - Space between the content and the elements border
    - Can be specified using propertiesl ike `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`
- Border
    - The border surrounding the padding and the content area
    - can be styled
- Margin
    - The margin is the outermost area of the an elements box, creating space between other elements

```css

.box {
    width: 200px; /*width of the content area */
    height: 100px; /* height of the content area */
    padding: 20px; /* padding around the content area, applied to all sides */
    border: 2px solid #333; /* Border around the padding */
    margin: 10px; /* Margin around the border */
}

```



## Responsive Web Design

This is an approach to web design that aims to make web pages look and function well on a variety of devices and screen sizes. It ensures a website's layout, images, text, and other elements adapt and respond to different screen resolutions and device capabilities.

This is criticial in the modern age of web traffic, as most people access website through their phone not through a pc or laptop.

Key Principles and techniques:

- Fluid Grid Layouts
    - Use percentage based widths for containers and elements rather than fixed pixel values
    - Use a flexible grid system that adjusts to screen size

- Media Queries
    - Media queries are CSS rules that apply styles based on the characteristics of the device such as screen width, height, and orientation

```css
/* Media query for screens with a max width of 768 pixels (typical for tablets)*/
@media (max-width: 768px){
    /* CSS Style for tablet screens */
}
```

- Mobile-first approach
    - Start desinging for mobile devices and then enhance for larger screens
    - Ensures mobile devices work first and foremost
- Touch-Friendly Navigation
    - Optimize navigation menus and buttons for touchscreen devices