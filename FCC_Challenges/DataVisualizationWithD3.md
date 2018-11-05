# Data Visualization with D3:

## Add Document Elements with D3

**The Lesson:**
D3 has several methods that let you add and change elements in your document.

The `select()` method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:

`const anchor = d3.select("a");`

The above example finds the first anchor tag on the page and saves an HTML node for it in the variable anchor. You can use the selection with other methods. The "d3" part of the example is a reference to the D3 object, which is how you access D3 methods.

Two other useful methods are `append()` and `text()`.

The `append()` method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

The `text()` method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

**Example:**
Here's an example that selects an unordered list, appends a list item, and adds text:
```JavaScript
d3.select("ul")
  .append("li")
  .text("Very important item");
```
D3 allows you to chain several methods together with periods to perform a number of actions in a row.

**Challange Instructions:**
Use the select method to select the `body` tag in the document. Then append an `h1` tag to it, and add the text "Learning D3" into the `h1` element.

**MySolution**
```JavaScript
<body>
  <script>
    // Add your code below this line
    d3.select("body")
      .append("h1")
      .text("Learning D3");    
    // Add your code above this line
  </script>
</body>
```


## Select a Group of Elements with D3

**The Lesson:**
D3 also has the `selectAll()` method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

**Example:**
`const anchors = d3.selectAll("a");`

Like the `select()` method, `selectAll()` supports method chaining, and you can use it with other methods.

**Challange Instructions:**
Select all of the `li` tags in the document, and change their text to "list item" by chaining the `.text()` method.

*notes:* I would have made the following example:

```JavaScript
<body>
  <a href="">Example</a>
  <a href="">Example</a>
  <a href="">Example</a>
  <script>
     const anchors = d3.selectAll("a")
      .test("SomeURL");     
  </script>
</body>
```
*Resources:* https://d3indepth.com/selections/

**My solution**
```JavaScript
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line
    const anchors = d3.selectAll("li")
      .text("list item");     
    // Add your code above this line
  </script>
</body>
```


## Work with Data in D3

**The Lesson:**
The D3 library focuses on a data-driven approach. When you have a set of data, you can apply D3 methods to display it on the page. Data comes in many formats, but this challenge uses a simple array of numbers.

The first step is to make D3 aware of the data. The `data()` method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.

A common workflow pattern is to create a new element in the document for each piece of data in the set. D3 has the `enter()` method for this purpose.

When `enter()` is combined with the `data()` method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.

**Example:**
Here is an example that selects a ul element and creates a new list item based on the number of entries in the array:
```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```
It may seem confusing to select elements that don't exist yet. This code is telling D3 to first `select` the `ul` on the page. Next, `select all` list items, which returns an empty selection. Then the `data()` method reviews the dataset and runs the following code three times, once for each item in the array. The `enter()` method sees there are no `li` elements on the page, but it needs 3 (one for each piece of data in dataset). New `li` elements are appended to the `ul` and have the text "New item".

**Challange Instructions:**
Select the `body` node, then select all `h2` elements. Have D3 create and `append` an `h2` tag for each item in the dataset array. The text in the `h2` should say "New Title". Your code should use the `data()` and `enter()` methods.

*Resources:* https://www.dashingd3js.com/binding-data-to-dom-elements

**My solution**
```JavaScript
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    // Add your code below this line
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title #3");   
    // Add your code above this line
  </script>
</body>
```


## Work with Dynamic Data in D3

**The Lesson:**
The last two challenges cover the basics of displaying data dynamically with D3 using the `data()` and `enter()` methods. These methods take a data set and, together with the `append()` method, create a new DOM element for each entry in the data set.

In the previous challenge, you created a new `h2` element for each item in the dataset array, but they all contained the same text, "New Title". This is because you have not made use of the data that is bound to each of the `h2` elements.
**Example:**
The D3 `text()` method can take a string or a callback function as an argument:

`selection.text((d) => d)` adding `d + 'text');` Would have been helpfull???

In the example above, the parameter d refers to a single entry in the dataset that a selection is bound to.

Using the current example as context, the first `h2` element is bound to 12, the second `h2` element is bound to 31, the third `h2` element is bound to 22, and so on.

**Challange Instructions:**
Change the `text()` method so that each `h2` element displays the corresponding value from the dataset array with a single space and "USD". For example, the first heading should be "12 USD".

*Resources:* https://forum.freecodecamp.org/t/work-with-dynamic-data-in-d3-help/222552/4

**My solution**
```JavaScript
<body>
  <script>    
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];        
      d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      // Add your code below this line      
      .text((d) => d + ' USD');      
      // Add your code above this line    
  </script>
</body>
```


## Add Inline Styling to Elements

**The Lesson:**
D3 lets you add inline CSS styles on dynamic elements with the style() method.

The style() method takes a comma-separated key-value pair as an argument.

**Example:**
Here's an example to set the selection's text color to blue:

`selection.style("color","blue");`

**Challange Instructions:**
Add the style() method to the code in the editor to make all the displayed text have a font-family of verdana.

*Resources:* Easy one...

**My solution**
```JavaScript
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];    
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("font-family","verdana");      
      // Add your code above this line
  </script>
</body>
```


## Change Styles Based on Data

**The Lesson:**
D3 is about visualization and presentation of data. It's likely you'll want to change the styling of elements based on the data. You can use a callback function in the style() method to change the styling for different elements.

**Example:**
For example, you may want to color a data point blue if has a value less than 20, and red otherwise. You can use a callback function in the `style()` method and include the conditional logic. The callback function uses the d parameter to represent the data point:

```
selection.style("color", (d) => {
  /* Logic that returns the color based on a condition */
});
```
The `style()` method is not limited to setting the color - it can be used with other CSS properties as well.

**Challange Instructions:**
Add the `style()` method to the code in the editor to set the color of the `h2` elements conditionally. Write the callback function so if the data value is less than 20, it returns "red", otherwise it returns "green".

Note
You can use if-else logic, or the ternary operator.
*Resources:* https://stackoverflow.com/questions/45593251/d3-setting-style-conditionally-with-immediately-invoked-arrow-function-and-tern/45654334

**My solution**
```JavaScript
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];    
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("color", d => d < 20 ? "red" : "green");      
      // Add your code above this line
  </script>
</body>
```


## Add Classes with D3

**The Lesson:**
Using a lot of inline styles on HTML elements gets hard to manage, even for smaller apps. It's easier to add a class to elements and style that class one time using CSS rules. D3 has the `attr()` method to add any HTML attribute to an element, including a class name.

The `attr()` method works the same way that `style()` does. It takes comma-separated values, and can use a callback function. 

**Example:**
Here's an example to add a class of "container" to a selection:

```
selection.attr("class", "container");
```

**Challange Instructions:**
Add the `style()` method to the code in the editor to set the color of the `h2` elements conditionally. Write the callback function so if the data value is less than 20, it returns "red", otherwise it returns "green".

Note
You can use if-else logic, or the ternary operator.
*Resources:* https://stackoverflow.com/questions/45593251/d3-setting-style-conditionally-with-immediately-invoked-arrow-function-and-tern/45654334

**My solution**
```JavaScript
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line      
      .attr("class", "bar");      
      // Add your code above this line
  </script>
</body>
```


## Add Classes with D3
**Example:**
`selection.style("cssProperty", (d) => d + '');`

**Challange Instructions:**
Add the `style()` method to the code in the editor to set the `height` property for each element. Use a callback function to return the value of the data point with the string "px" added to it.

*Resources:* easy...

**My solution**
```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];    
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line      
      .style("height", (d) => d + 'px')      
      // Add your code above this line
  </script>
</body>
```


## Change the Presentation of a Bar Chart
**Example:** 
none

**Challange Instructions:**
First, add a margin of 2px to the bar class in the style tag. Next, change the callback function in the style() method so it returns a value 10 times the original data value (plus the "px").

Note
Multiplying each data point by the same constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.

*Resources:*
**My solution**
```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */
    margin: 2px;
    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];    
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d) => (d * 10 + "px"));      
      // Add your code above this line
  </script>
</body> 
```


## Learn About SVG in D3
**Example:**
none
```JS
//Make an SVG Container
 var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);
 ```
The above would have been nice.

**Challange Instructions:**
Add an svg node to the body using `append()`. Give it a width attribute set to the provided w constant and a height attribute set to the provided `h` constant using the `attr()` method for each. You'll see it in the output because there's a background-color of pink applied to it in the style tag.

Note
Width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 `width` to `height` ratio, no matter what the zoom level is.

*Resources:* https://stackoverflow.com/questions/10883523/d3-how-to-change-the-width-and-length-of-svg

**My solution**
```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];    
    const w = 500;
    const h = 100;    
    const svg = d3.select("body")
    // Add your code below this line
        .append("svg")
        .attr("width", w)
        .attr("height", h);                  
    // Add your code above this line
  </script>
</body>
```


## Display Shapes with SVG
**Example:**
none, a freaking example would have been awesome!

**Challange Instructions:**
Add a rect shape to the svg using append(), and give it a width attribute of 25 and height attribute of 100. Also, give the rect x and y attributes each set to 0.

*Resources:*

**My solution**
```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  // Add your code below this line
                  .append("rect")
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("width", 25)
                  .attr("height", 100);           
                  // Add your code above this line
  </script>
</body>
```


## Create a Bar for Each Data Point in the Set
**Example:**
A previous challenge showed the format for how to create and append a div for each item in dataset:
```javascript
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
```
There are a few differences working with rect elements instead of divs. The rects must be appended to an svg element, not directly to the body. Also, you need to tell D3 where to place each rect within the svg area. The bar placement will be covered in the next challenge.

**Challange Instructions:**
Use the data(), enter(), and append() methods to create and append a rect for each item in dataset. The bars should display all on top of each other, this will be fixed in the next challenge.

*Resources:* https://d3js.org/

**My solution**
```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       // Add your code below this line

       d3.select("svg").selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")  

       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

## Dynamically Set the Coordinates for Each Bar
**Example:**
The attr() method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one for the data point itself (usually d) and one for the index of the data point in the array. The second argument for the index is optional. Here's the format:

```javascript
    selection.attr("property", (d, i) => {
      /*
      * d is the data point value
      * i is the index of the data point in the array
      */
    })
```
It's important to note that you do NOT need to write a for loop or use forEach() to iterate over the items in the data set. Recall that the data() method parses the data set, and any method that's chained after data() is run once for each item in the data set.

**Challange Instructions:**
Change the x attribute callback function so it returns the index times 30.

*Note*
Each bar has a width of 25, so increasing each x value by 30 adds some space between the bars. Any value greater than 25 would work in this example.

*Resources:*

**My solution**
```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         // Add your code below this line

         return i*30;

         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```


## Dynamically Change the Height of Each Bar
**Example:**
The height of each bar can be set to the value of the data point in the array, similar to how the x value was set dynamically.
```javascript
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```

**Challange Instructions:**
Change the callback function for the height attribute to return the data value times 3.

*Note*
Remember that multiplying all data points by the same constant scales the data (like zooming in). It helps to see the differences between bar values in this example.
*Resources:*
**My solution**
```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line
         
         return d*3;
         
         // Add your code above this line
       });
  </script>
</body>
```

##  Invert SVG Elements
**Example:**
The y coordinate that is y = heightOfSVG - heightOfBar would place the bars right-side-up.

**Challange Instructions:**
Change the callback function for the y attribute to set the bars right-side-up. Remember that the height of the bar is 3 times the data value d.

*Note*
In general, the relationship is `y = h - m * d`, where `m` is the constant that scales the data points.
*Resources:*
**My solution**
```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
         // Add your code below this line
         
         return h-3*d;
          
         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```

## Change the Color of an SVG Element
**Example:**
In SVG, a rect shape is colored with the fill attribute. It supports hex codes, color names, and rgb values, as well as more complex options like gradients and transparency. (not a good example!!!)

**Challange Instructions:**
Add an attr() method to set the "fill" of all the bars to the color "navy".

*Resources:*
**My solution**
```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       // Add your code below this line

       .attr("fill","navy");       
       
       // Add your code above this line
  </script>
</body>
```

## Add Labels to D3 Elements
**Example:**
No example...

**Challange Instructions:**
The code in the editor already binds the data to each new text element. First, append text nodes to the svg. Next, add attributes for the x and y coordinates. They should be calculated the same way as the rect ones, except the y value for the text should make the label sit 3 units higher than the bar. Finally, use the D3 text() method to set the label equal to the data point value.

*Note*
For the label to sit higher than the bar, decide if the y value for the text should be 3 greater or 3 less than the y value for the bar.
*Resources:*
**My solution**
```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line

       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)

       // Add your code above this line
  </script>
<body>
```

## Style D3 Labels
**Example:**
D3 methods can add styles to the bar labels. The fill attribute sets the color of the text for a text node. The style() method sets CSS rules for other styles, such as "font-family" or "font-size".

**Challange Instructions:**
Set the font-size of the text elements to 25px, and the color of the text to red.

*Resources:*
https://www.dashingd3js.com/svg-text-element

**My solution**
```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       // Add your code below this line

       .attr("font-size", "25px")
       .attr("fill", "red");       
       
       // Add your code above this line
  </script>
</body>
```

## Add a Hover Effect to a D3 Element
**Example:**
You set the CSS class on the SVG elements with the attr() method. Then the :hover pseudo-class for your new class holds the style rules for any hover effects.

**Challange Instructions:**
Use the attr() method to add a class of bar to all the rect elements. This changes the fill color of the bar to brown when you mouse over it.

*Resources:*
**My solution**
```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line

        .attr("class", "bar")       
       
       // Add your code above this line
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);
       
  </script>
</body>
```

## Add a Tooltip to a D3 Element
**Example:**
A tooltip shows more information about an item on a page when the user hovers over that item. There are several ways to add a tooltip to a visualization, this challenge uses the SVG title element.

title pairs with the text() method to dynamically add data to the bars.

**Challange Instructions:**
Append a title element under each rect node. Then call the text() method with a callback function so the text displays the data value.

*Resources:*
**My solution**
```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line

       .append("title")
       .text(d => d);       
       
       // Add your code above this line
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))   
    
  </script>
</body>
```

## Create a Scatterplot with SVG Circles
**Example:**
A scatter plot is another type of visualization. It usually uses circles to map data points, which have two values each. These values tie to the x and y axes, and are used to position the circle in the visualization.

SVG has a circle tag to create the circle shape. It works a lot like the rect elements you used for the bar chart.

**Challange Instructions:**
Use the data(), enter(), and append() methods to bind dataset to new circle elements that are appended to the SVG canvas.

Note
The circles won't be visible because we haven't set their attributes yet. We'll do that in the next challenge.

*Resources:*
**My solution**
```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];
    
    
    const w = 500;
    const h = 500;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("circle")
       // Add your code below this line

      .data(dataset)
      .enter()
      .append("circle")       
       
       // Add your code above this line
  
  </script>
</body>
```

## Add Attributes to the Circle Elements
**Example:**
A circle in SVG has three main attributes. The cx and cy attributes are the coordinates. They tell D3 where to position the center of the shape on the SVG canvas. The radius (r attribute) gives the size of the circle.

Just like the rect y coordinate, the cy attribute for a circle is measured from the top of the SVG canvas, not from the bottom.

All three attributes can use a callback function to set their values dynamically. Remember that all methods chained after data(dataset) run once per item in dataset. The d parameter in the callback function refers to the current item in dataset, which is an array for each point. You use bracket notation, like d[0], to access the values in that array.

**Challange Instructions:**
Add cx, cy, and r attributes to the circle elements. The cx value should be the first number in the array for each item in dataset. The cy value should be based off the second number in the array, but make sure to show the chart right-side-up and not inverted. The r value should be 5 for all circles.

*Resources:*

**My solution**
```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];
    
    
    const w = 500;
    const h = 500;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line

        .attr("cx", (d) => d[0])
        .attr("cy",(d) => h - d[1])
        .attr("r", (d) => 5)
       
       // Add your code above this line
  
  </script>
</body>
```

## Add Labels to Scatter Plot Circles
**Example:**
You can add text to create labels for the points in a scatter plot.

The goal is to display the comma-separated values for the first (x) and second (y) fields of each item in dataset.

The text nodes need x and y attributes to position it on the SVG canvas. In this challenge, the y value (which determines height) can use the same value that the circle uses for its cy attribute. The x value can be slightly larger than the cx value of the circle, so the label is visible. This will push the label to the right of the plotted point.

**Challange Instructions:**
Label each point on the scatter plot using the text elements. The text of the label should be the two values separated by a comma and a space. For example, the label for the first point is "34, 78". Set the x attribute so it's 5 units more than the value you used for the cx attribute on the circle. Set the y attribute the same way that's used for the cy value on the circle.

*Resources:*
https://stackoverflow.com/questions/36954426/adding-label-on-a-d3-scatter-plot-circles

**My solution**
```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];
    
    
    const w = 500;
    const h = 500;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       // Add your code below this line
       
       .text((d) => (d[0] + ", " + d[1]))
       .attr("x", (d) => (d[0] + 5))
       .attr("y", (d) => (h - d[1]));  
       
       // Add your code above this line
  </script>
</body>
```

## Create a Linear Scale with D3
**Example:**
The bar and scatter plot charts both plotted data directly onto the SVG canvas. However, if the height of a bar or one of the data points were larger than the SVG height or width values, it would go outside the SVG area.

In D3, there are scales to help plot data. Scales are functions that tell the program how to map a set of raw data points onto the pixels of the SVG canvas.

For example, say you have a 100x500-sized SVG canvas and you want to plot Gross Domestic Product (GDP) for a number of countries. The set of numbers would be in the billion or trillion-dollar range. You provide D3 a type of scale to tell it how to place the large GDP values into that 100x500-sized area.

It's unlikely you would plot raw data as-is. Before plotting it, you set the scale for your entire data set, so that the x and y values fit your canvas width and height.

D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method scaleLinear():

`const scale = d3.scaleLinear()`

By default, a scale uses the identity relationship. The value of the input is the same as the value of the output. A separate challenge covers how to change this.

**Challange Instructions:**
Change the scale variable to create a linear scale. Then set the output variable to the scale called with an input argument of 50.

*Resources:*

**My solution**
```html
<body>
  <script>
    // Add your code below this line
    
    const scale = d3.scaleLinear() // Create the scale here
    const output = scale(50); // Call the scale with an argument here
    
    // Add your code above this line
    
    d3.select("body")
      .append("h2")
      .text(output);
  
  </script>
</body>
```

## Set a Domain and a Range on a Scale
**Example:**
```javascript
// Set a domain
// The domain covers the set of input values
scale.domain([50, 480]);
// Set a range
// The range covers the set of output values
scale.range([10, 500]);
scale(50) // Returns 10
scale(480) // Returns 500
scale(325) // Returns 323.37
scale(750) // Returns 807.67
d3.scaleLinear()
```

**Challange Instructions:**
Create a scale and set its domain to [250, 500] and range to [10, 150].

*Note*
You can chain the domain() and range() methods onto the scale variable.

*Resources:*

**My solution**
```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();
    
    scale.domain([250,500]);
    scale.range([10,150]);
    
    
    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

## Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
**Example:**
D3 has two methods - min() and max() to return this information. Here's an example:
```
    const exampleData = [34, 234, 73, 90, 6, 52];
    d3.min(exampleData) // Returns 6
    d3.max(exampleData) // Returns 234
```
A dataset may have nested arrays, like the [x, y] coordinate pairs that were in the scatter plot example. In that case, you need to tell D3 how to calculate the maximum and minimum.

Fortunately, both the min() and max() methods take a callback function.

In this example, the callback function's argument d is for the current inner array. The callback needs to return the element from the inner array (the x or y value) over which you want to compute the maximum or minimum. Here's an example for how to find the min and max values with an array of arrays:
```
    const locationData = [[1, 7],[6, 3],[8, 3]];
    // Returns the smallest number out of the first elements
    const minX = d3.min(locationData, (d) => d[0]);
    // minX compared 1, 6, and 8 and is set to 1
```

**Challange Instructions:**
The positionData variable holds a 3-dimensional (3D) array. Use a D3 method to find the maximum value of the z coordinate (the third value) from the arrays and save it in the output variable.

*Note*
Fun fact - D3 can plot 3D arrays.

*Resources:*

**My solution**
```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
    // Add your code below this line
    
    const output = d3.max(positionData, (d) => d[2]); // Change this line
    
    // Add your code above this line
    
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

## Use Dynamic Scales
**Example:**
```javascript
const dataset = [
  [ 34, 78 ],
  [ 109, 280 ],
  [ 310, 120 ],
  [ 79, 411 ],
  [ 420, 220 ],
  [ 233, 145 ],
  [ 333, 96 ],
  [ 222, 333 ],
  [ 78, 320 ],
  [ 21, 123 ]
];
const w = 500;
const h = 500;

// Padding between the SVG canvas boundary and the plot
const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

**Challange Instructions:**
Use the yScale variable to create a linear y-axis scale. The domain should start at zero and go to the maximum y value in the set. The range should use the SVG height (h) and include padding.

*Note*
Remember to keep the plot right-side-up. When you set the range for the y coordinates, the higher value (height minus padding) is the first argument, and the lower value is the second argument.

*Resources:*

**My solution**
```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];
    
    const w = 500;
    const h = 500;
    
    // Padding between the SVG canvas boundary and the plot
    const padding = 30;
    
    // Create an x and y scale
    
    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset,(d)=> d[0])])
                    .range([padding, w - padding]);
    
    // Add your code below this line
    
    const yScale = d3.scaleLinear()
          .domain([0, d3.max(dataset,(d)=>d[1])])
          .range([w-padding, padding]);
                     
                     
    // Add your code above this line
    
    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

## Add Classes with D3
**Example:**
```
shape
  .attr("x", (d) => xScale(d[0]))
```
**Challange Instructions:**
Use xScale and yScale to position both the circle and text shapes onto the SVG canvas. For the circles, apply the scales to set the cx and cy attributes. Give them a radius of 5 units, too.

For the text elements, apply the scales to set the x and y attributes. The labels should be offset to the right of the dots. To do this, add 10 units to the x data value before passing it to the xScale.

*Resources:*

**My solution**
```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];
    
    const w = 500;
    const h = 500;
    const padding = 60;
    
    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);
    
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy", (d) => yScale(d[1]))       
       .attr('r', 5);
       
       // Add your code above this line
       
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       // Add your code below this line
       
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
       
       // Add your code above this line
  </script>
</body>
```

## Add Classes with D3
**Example:**
**Challange Instructions:**
*Resources:*
**My solution**
```html

```

## Add Classes with D3
**Example:**
**Challange Instructions:**
*Resources:*
**My solution**
```html

```
