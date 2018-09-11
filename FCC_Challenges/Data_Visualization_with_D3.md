# Data Visualization with D3:

**Add Document Elements with D3**

Here's an example that selects an unordered list, appends a list item, and adds text:(nice example and instructions)

```javascript
d3.select("ul")
  .append("li")
  .text("Very important item");
```
D3 allows you to chain several methods together with periods to perform a number of actions in a row.

Use the select method to select the body tag in the document. Then append an h1 tag to it, and add the text "Learning D3" into the h1 element.
```html
<body>
  <script>
    // Add your code below this line
    d3.select("body")
      .append("h1")
      .text( "Learning D3");    
    // Add your code above this line
  </script>
</body>
```
