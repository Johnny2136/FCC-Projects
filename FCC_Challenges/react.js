//Introduction to the React Challenges:
//Create a Simple JSX Element
//JavaScript within curly braces: { 'this is treated as JavaScript code' }
//under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root'))
const JSX = <h1>Hello JSX!</h1>;


//Create a Complex JSX Element
const JSX = (<div>
             <h1>Heading One</h1>
             <p>Paragraph Two</p>
             <ul>
               <li>List one</li>
               <li>List Two</li>
               <li>List Three</li>
             </ul>
            </div>);
            
            
//Add Comments in JSX
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    {/* This is a comment! */}
    <p>Here's a subtitle</p>
  </div>
);
