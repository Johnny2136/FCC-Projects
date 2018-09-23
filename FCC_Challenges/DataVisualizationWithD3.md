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


## Challange

**The Lesson:**

**Example:**
```JavaScript
<body>
  <ul></ul>
  <script>
 
  </script>
</body>
```
**Challange Instructions:**

*Resources:* 

**My solution**
```JavaScript

```



