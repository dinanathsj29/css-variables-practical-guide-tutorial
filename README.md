<p align="center">
 <img src="_images-css-variables/1-css3-logo-1.png" alt="CSS Variables" title="CSS Variables" width="200" />
</p>

CSS Variables = CSS custom properties
=====================

`Variables` are one of the most fundamental concepts in any programming language. A `variable is container/holder to store/hold the data/information` for future programming use or calculation purpose.

`Custom properties sometimes also referred to as CSS variables or Cascading variables` are nothing but entities that contain specific values to be reused/accessed throughout a document and saves lots of time while editing large/huge websites.

CSS variables set/defined/declared using custom property notation (e.g., `--base-color: black;`) and are accessed/called using the `var() function` (e.g., `background-color: var(--base-color);`).

Welcome
---------------------

Hi All, I'm **`Dinanath Jayaswal, Senior UI/Web Developer and Adobe Certified Expert Professional`**, I wanna welcome you to CSS Variables-CSS custom properties practical Guide/Tutorial for beginners. 

About the Course/Tutorial
---------------------

This is a comprehensive guide to use the CSS Variables-CSS custom properties. This complete guide explains everything you want to know/learn about the CSS Variables-CSS custom properties.

Who is this for? 
---------------------

This Course/Tutorial is ideal for:
- Any Web designer/developer interested in getting a deep understanding of CSS Advanced-latest features like CSS Variables-CSS custom properties
- CSS lovers want to acquire knowledge of next/latest CSS level (properties/features)
- Candidates desire to become CSS Expert and better Front End web Developer / Designer
- Web designers/developers who want to improve skills with new web standards
- Anyone who knows CSS and wants to dive deeper with upcoming features
- Anyone wants to sharpen their CSS skills

Course/Tutorial achievement
---------------------
Course/Tutorial Goal
---------------------

After completing/attending/finishing this Course/Tutorial, participants should be able to: 
- Create your style sheets those are less repetitive and easier to maintain
- Write CSS with less repetition, better readability, and more flexibility
- Use and follow the power of advanced CSS Variables features in huge websites/applications
- Declare and use the CSS variables in the Global and Local Scope
- Understand the difference between CSS variables and Preprocessors like SASS, LESS variables

Prerequisites for current course / What you need to know
---------------------

- Basic/Intermediate knowledge of HTML5 and CSS3
- Basics of JavaScript will be an added advantage

Topics included/covered
=====================

1. [Introduction to CSS Variables/Custom Properties](#1-introduction-to-css-variables-custom-properties)
    - 1.1. [What are Variables](#11-what-are-variables)
    - 1.2. [What are CSS Variables](#12-what-are-css-variables)
    - 1.3. [Why CSS Variables](#13-why-css-variables) | 
    [CSS Variable Benefits](#13-css-variable-benefits)

1 Introduction to CSS Variables Custom Properties
=====================

- CSS is static stylesheet language/mostly a declarative language, lacking in dynamic capabilities/Programming features-terminologies like variables, mixin, function, re-usable classes, etc.
- To overcome all CSS disadvantages and add advanced programming features-terminologies, earlier/in past we have used CSS pre-processors like `SASS` or `LESS`, but now a days it's possible to use those features in pure/native CSS with CSS3 advanced features i.e. Custom Properties

1.1. What are Variables
---------------------

- `Variables` are one of the most fundamental and important concepts in any programming language
- A variable is `container/holder to store/hold the data/information`
- A variable is a kind of data holder where we can store some value for future further programming use or calculation purpose
- A JavaScript variable is simply a `name of the storage location (named containers/named storage)` for data
- Variables are `symbolic names for values` 
- Variables are used to store data of different types like a `string` of text, `numbers`, `boolean` values like true/false, an `array` or `object` of data, etc. 
- The data or value stored in the variables can be `set`, `updated`, and `retrieved` whenever needed
- Variables let you store and update different values your program needs in order to perform some work
- Variables are declared using the keyword `var` keyword
- The `assignment operator (=)` is used to assign value to a variable, like this: `var varName = value;` or `var firstName = 'JavaScript';`
- **Example**: Variables are like `box or an envelope` which we use to `organize various kinds of stuff` and put a `label` on each box or an envelope
- **Example**: Variable declaration and assignment is just `like Maths & Algebra`: `x = 10`; and in JavaScript we write `var x = 10;`
> **Note**: Depending on programming language, the different assignment operator like `equal to =` or `colon :` is used to assign value to a variable

- For learning/understanding purpose/instance, lets consider the following JavaScript snippet:
```js
// javascript variables - variables defined to hold different types of data
var techName = 'JavaScript'; // String literal 
var version = 6; // Number literal
var isDone = true; // Boolean literal

console.log('Learning '+techName+version);

var firstName = 'Dinanath ';
let lastName = 'Jayaswal'
const fullName = firstName + lastName
```

> **Syntax & Example**: `1.1-javascript-variable.html`

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>1.1-javascript-variable.html</title>

    <!-- internal style -->
    <style>
      /* css selector: { property:value; } */
      body {
        font-family: arial;
      }
    </style>

  </head>

  <body>
    

    <!-- include external JavaScript - body section -->
    <script src="./1.1-script.js"></script>
    
  </body>

</html>
```

> **Syntax & Example**: `1.1-script.js`

```js
// external js file
// Write all JavaScript code here

// variables defined to hold different types of data
var techName = 'JavaScript'; // String literal 
var version = 6; // Number literal
var isDone = true; // Boolean literal

console.log('Learning '+techName+version);

// ------------------------------

// Declaring Variable
var userName;

// Assigning value
userName = 'Dinanath';

console.log('Welcome '+userName);

// ------------------------------

// Declaring multiple variables
var firstName = 'Dinanath', lastName = 'Jayaswal', age = 35, isMarried = 'true';

// Declaring multiple variables in multiple lines for readability
/* var firstName = 'Dinanath', 
lastName = 'Jayaswal', 
age = 35, 
isMarried = 'true'; */

console.log('I am ' + firstName + ' ' + lastName);
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-css-variables/1.1-javascript-variable.png" alt="JavaScript variables declaration and use" title="JavaScript variables declaration and use" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 1.1 - JavaScript variables declaration and use </figcaption>
  </figure>
</p>

1.2. What are CSS Variables
---------------------

- CSS Variables look like a simple regular CSS properties with an extra `dashes --` before them: `--variable-name: value;` e.g., `--base-font: Arial;`
- CSS variables set/defined/declared using custom property notation (e.g., `--base-color: black;`) and are accessed/called using the `var() function` (e.g., `background-color: var(--base-color);`).
- CSS Variables are also known as "Custom Properties", simply we can say `CSS Variables == Custom Properties`
- `Custom properties sometimes also referred to as CSS variables or Cascading variables` are nothing but entities that contain specific values to be reused/accessed throughout a document and saves lots of time while editing CSS properties and values in large/huge websites
- `CSS variables` are very handy and useful when we are working with huge/large websites with repetitive properties and styles (many properties like color,font-size, margins, etc)
- By using `CSS variables` In case of any `global change needed` through-out the application, instead of changing every occurrence/instance its advisable to change the `single variable` so it will reflect globally
- Custom properties do follow CSS mechanisms/principles and so they cascade, inherit their value from their parent. 
- CSS variables can be defined with or as Global or Local scope

> **Syntax & Example**: `1.2.1-old-css-way-repetition.html`

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>1.2.1-old-css-way-repetition.html</title>

    <link rel="stylesheet" href="./1.2.1-style-old-way-repetition.css">
  
  </head>

  <body>
    
    <div class="container">

      <div class="sub-container">

        <h1 class="heading-text" id="mainHeadingText">1.2 What are CSS Variables</h1>

        <p class="para-text" id="mainParaText">`Variables` are one of the most fundamental and important concepts in any programming language</p>

        <h2 class="subheading-text" id="subHeadingText">1.2 - 1.2.1 old css way repetition</h2>

      </div>

    </div>
  
  </body>

</html>
```

> **Syntax & Example**: `1.2.1-style-old-way-repetition.css`

```css
body {
  font-family: arial;
}

.heading-text {
  background-color: #f66969;
  color: #ffffff
  padding: 10px;
}

/* same property used above with .heading-text are repeated */
.subheading-text {
  background-color: #f66969;
  color: #ffffff
  padding: 10px;
}
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-css-variables/1.2.1-old-css-way-repetition.png" alt="The old CSS way of repeating value" title="The old CSS way of repeating value" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 1.2.1 - The old CSS way of repeating value </figcaption>
  </figure>
</p>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-css-variables/1.2.1.1-old-css-way-repetition.png" alt="The old CSS way of repeating value" title="The old CSS way of repeating value" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 1.2.1.1 - The old CSS way of repeating value </figcaption>
  </figure>
</p>

<hr/>

> **Syntax & Example**: `1.2.2-new-css-way-variables.html`

```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>1.2.2-new-css-way-variables.html</title>

    <link rel="stylesheet" href="./1.2.2-style-new-css-way-variables.css">
  
  </head>

  <body>
    
    <div class="container">

      <div class="sub-container">

        <h1 class="heading-text" id="mainHeadingText">1.2 What are CSS Variables</h1>

        <p class="para-text" id="mainParaText">`Variables` are one of the most fundamental and important concepts in any programming language</p>

        <h2 class="subheading-text" id="subHeadingText">1.2 - 1.2.2 new css way variables</h2>

      </div>

    </div>
  
  </body>

</html>
```

> **Syntax & Example**: `1.2.2-style-new-css-way-variables.css`

```css
/* CSS selectors must set/defined/declared inside any root selector like `:root` or `body`, so that these variables exists globally/entire document to use */
:root {
  --font-face: Arial;
  --base-bg-color: #f66969;
  --base-text-color: #ffffff;
  --base-padding: 10px;
}

body {
  font-family: var( --font-face);
}

.heading-text {
  /* background-color: #f66969;
  color: #ffffff;
  padding: 10px; */

  /* access/call/use variables with var() function*/
  background-color: var(--base-bg-color);
  color: var(--base-text-color);
  padding: var(--base-padding);
}

.subheading-text {
  /* background-color: #f66969;
  color: #ffffff;
  padding: 10px; */

  background-color: var(--base-bg-color);
  color: var(--base-text-color);
  padding: var(--base-padding);
}
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-css-variables/1.2.2-new-css-way-variables.png" alt="The new CSS way of using variables - DRY - Do Not Repeat Yourself principle" title="The new CSS way of using variables - DRY - Do Not Repeat Yourself principle" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 1.2.2 - The new CSS way of using variables - DRY - Do Not Repeat Yourself principle </figcaption>
  </figure>
</p>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-css-variables/1.2.2.1-new-css-way-variables.png" alt="The new CSS way of using variables - DRY - Do Not Repeat Yourself principle" title="The new CSS way of using variables - DRY - Do Not Repeat Yourself principle" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 1.2.2 - The new CSS way of using variables - DRY - Do Not Repeat Yourself principle </figcaption>
  </figure>
</p>

1.3. Why CSS Variables
---------------------
1.3. CSS Variable Benefits
---------------------

- The benefits of using variables in CSS are not that much different than from those of using variables in any other programming languages (define/initiate once and use when required)
- The beauty of variables is that they let you store your valuables/properties in one place and update it on the fly for several various purposes
- As your web apps grow bigger, the CSS becomes big, redundant and many times messy. Used within a good context, the CSS variables, give you the mechanism to reuse and easily change repeatedly occurring CSS properties
- Its helpful in following `DRY - Do Not Repeat Yourself` principle, One of the most compelling thing is that it reduces repetition in your stylesheet
- Create your style sheets those are less repetitive and easier to maintain
better readability, and more flexibility
- One can easily access and overwrite CSS variables inside Media Query
- Anytime we can create and use scoped variables used only for a particular element like the following variable is used only for a top navigation bar: `.nav-top { --base-link-color: #ed143d; }`

