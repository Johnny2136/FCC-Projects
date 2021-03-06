# Introduction to the React Challenges:

## Create a Simple JSX Element
```javascript
//JavaScript within curly braces: { 'this is treated as JavaScript code' }
//under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root'))
const JSX = <h1>Hello JSX!</h1>;
```

## Create a Complex JSX Element
```javascript
const JSX = (<div>
             <h1>Heading One</h1>
             <p>Paragraph Two</p>
             <ul>
               <li>List one</li>
               <li>List Two</li>
               <li>List Three</li>
             </ul>
            </div>);
```


## Add Comments in JSX
```javascript
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    {/* This is a comment! */}
    <p>Here's a subtitle</p>
  </div>
);
```


## Render HTML Elements to the DOM
```javascript
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```


## Define an HTML Class in JSX
```javascript
const JSX = (
  <div className= "myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
```


## Learn About Self-Closing JSX Tags
```javascript
const JSX = (
  <div>
    //change code below this line
    return (
      <br />
        {      
          <p /> 
        }
      <hr />
    );
    //change code above this line    
  </div>
);
```


## Create a Stateless Functional Component
```javascript
const MyComponent = function() {
  // change code below this line
  return (
    <div className='customClass'> "Text" </div>
  );
  // change code above this line
};
```


## Create a React Component
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
      <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};
```


## Create a Component with Composition
```javascript
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
        <ChildComponent/>
        { /* change code above this line */ }
      </div>
    );
  }
};
```


## Use React to Render Nested Components
```javascript
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};
const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
      <TypesOfFruit />
      { /* change code above this line */ }
    </div>
  );
};
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits />
        { /* change code above this line */ }
      </div>
    );
  };
};
```


## Compose React Components
```javascript
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
          <NonCitrus />
          <Citrus />
        { /* change code above this line */ }
      </div>
    );
  }
};
class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  };
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
          < Fruits />
        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  };
};
```


## Render a Class Component to the DOM
```javascript
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        < Fruits />
        < Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
};
// change code below this line
 ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
 ```
 
 
 ## Write a React Component from Scratch
 ```javascript
 // change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};
// change code below this line
 ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'));
 ```
 
 
 ## Pass Props to a Stateless Functional Component
 ```javascript
 const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}!</p>
      { /* change code above this line */ }
    </div>
  );
};
// eslint-disable-next-line
class Calendar extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
         <CurrentDate date={Date()}/>
        { /* change code above this line */ }
      </div>
    );
  }
};
```


## Override Default Props
```javascript
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}
Items.defaultProps = {
  quantity: 0
}
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return (
      <Items quantity = {10} />);
    { /* change code above this line */ }
  }
};
```


## Pass an Array as Props
```javascript
const List= (props) => {
  { /* change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* change code above this line */ }
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks= { ["walk","dog","workout"] } />
        <h2>Tomorrow</h2>
        <List tasks= { ["walk","dog","workout","programming"] } />
        { /* change code above this line */ }
      </div>
    );
  }
};
```


## Use Default Props
```javascript
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line
ShoppingCart.defaultProps = { items: 0};
```


## Override Default Props
```javascript
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}
Items.defaultProps = {
  quantity: 0
}
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return (
      <Items quantity = {10} />);
    { /* change code above this line */ }
  }
};
```


## Use PropTypes to Define the Props You Expect
```javascript
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
// change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// change code above this line
Items.defaultProps = {
  quantity: 0
};
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```


## Access Props Using this.props
```javascript
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong>
             {this.props.tempPassword}</strong></p>
            { /* change code above this line */ }
        </div>
    );
  };
};
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */}
          <ReturnTempPassword tempPassword= {"12345678"}/>
          { /* change code above this line */ }
        </div>
    );
  };
};
```


## Review Using Props with Stateless Functional Components
* NO GOOD EXAMPLE!!!
```javascript
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name='camper' />
      </div>
    );
  }
};
// change code below this line
class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>{this.props.name}</p>
    );
  }
};
Camper.propTypes = {name:PropTypes.string.isRequired};
Camper.defaultProps = { name : 'CamperBot'};
```


## Create a Stateful Component
* Example could have been better
```javascript
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
    name : 'nametest'
    };
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  };
};
```


## Render State in the User Interface
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```


## Render State in the User Interface Another Way
*  An example would be nice
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    var name=this.state.name;
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
         <h1>{name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```


## Set State with this.setState
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```


## Bind 'this' to a Class Method
* NO good EXAMPLE!!!!
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line
    this.addItem=this.addItem.bind(this)
    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.addItem}>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
```


## Use State to Toggle an Element
* Again NO GOOD EXAMPLE!!!
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility(){
    this.setState({
      visibility: !this.state.visibility
    })
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
```


## Write a Simple Counter
* Examples would be nice!
```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // change code above this line
  };
  // change code below this line
  increment(){
    this.setState( {
      count: this.state.count + 1
    });
  };
  decrement(){
    this.setState({
      count: this.state.count - 1
    });    
  };
  reset(){
    this.setState({
      count: 0
    });
  };
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```


## Create a Controlled Input
* Would it kill you to add RELEVENT examples???
```javascript
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this)
    // change code above this line
  }
  // change code below this line
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
         <input value ={this.state.input} onChange={this.handleChange}/>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```


## Create a Controlled Form
```javascript
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
    // change code above this line
 ```   
    
    
    
## Use the Lifecycle Method componentDidMount
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }
          <input value={this.state.input} onChange={this.handleChange} />
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
        <h1>{this.state.submit}</h1>
        { /* change code above this line */ }
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};
```


## Pass State as Props to Child Components
```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```


## Pass a Callback as Props
```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }
        <GetInput input={this.state.inputValue}handleChange={this.handleChange }/>
        <RenderInput input={this.state.inputValue}/>
        { /* change code above this line */ }
       </div>
    );
  }
};
class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};
class RenderInput extends React.Component {
  constructor(props) {
    super(props);
```    
    
    
## Add Event Listeners
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
     document.removeEventListener('keydown', this.handleKeyPress)
  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```


## Use the Lifecycle Method componentWillMount
* No clear direction for this challange very poorly written!
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line
    <div>console.log("test");</div>
    // change code above this line
  }
  render() {
    return <div />
  }
};
```


## Manage Updates with Lifecycle Methods
```javascript
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
    componentWillReceiveProps(nextProps) {
      console.log(this.props + '-' + nextProps);
    };
    componentDidUpdate() {
      console.log('Component did update');
    };
  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  };
};
class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  };
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  };
};
```


## Optimize Re-Renders with shouldComponentUpdate
```javascript
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
     if (nextProps.value % 2 == 0){
        return true;
     }; 
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};
class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
```


## Introducing Inline Styles
```javascript
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
```


## Add Inline Styles in React
* An example would have been nice!
```javascript
 const styles = {color: "purple", fontSize: 40, border: "2px solid purple"};
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};
```


## Use Advanced JavaScript in React Render Method
* An example would have been nice!
```javascript
const inputStyle = {
  width: 235,
  margin: 5
}
class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt', 
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it', 
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex] // << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }
          {answer}
          { /* change code above this line */ }
        </p>
      </div>
    );
  }
};
```


## Render with an If/Else Condition
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    if(this.state.display){
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    }else {
      return(
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>  
        </div>
      );
    } 
  }
};
```


## Use && for a More Concise Conditional
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
     return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```


## Use a Ternary Expression for Conditional Rendering
```javascript
const inputStyle = {
  width: 235,
  margin: 5
};
class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state= {
      input: "",
      userAge:""
    };
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
          /* change code here */
            this.state.userAge.length > '' ? (this.state.input < 18 ? buttonThree : buttonTwo) : buttonOne
        }
      </div>
    );
  }
};
```


## Render Conditionally from Props
* This was totally awful... poor instructions, no good examples, took a long time to get this.
```javascript
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   /* change code here */
   const { fiftyFifty } = this.props;
    return (
      <h1>
      {
        /* change code here */
        fiftyFifty ? 'You Win!' : 'You Lose!'
      }
      </h1> 
    )
  };
};
class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // change code here
    });
  }
  render() {
    let expression = Math.random() > .5; // change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
          <Results fiftyFifty={expression} />
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
```


## Change Inline CSS Conditionally Based on Component State
```javascript
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line
       this.state.input.length > 15 && (inputStyle = {
      border: '3px solid red'})
    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```


## Use Array.map() to Dynamically Render Elements
```javascript
const textAreaStyles = {
  width: 235,
  margin: 5
};
class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
this.state = {
  userInput: '',
  toDoList: []
};
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(function(item){
      return <li>{item}</li>;
    }); // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};
```


## Give Sibling Elements a Unique Key Attribute
```javascript
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];
function Frameworks() {
  // change code here
  const renderFrameworks = frontEndFrameworks.map((renderFrameworks) => <li key={renderFrameworks.toString()}>{renderFrameworks}</li>) 
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```


## Use Array.filter() to Dynamically Filter an Array
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // change code here
    const renderOnline = usersOnline.map(x => <li key={x.username}>{x.username}</li>); // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};
```


## Render React on the Server with renderToString
```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};
// change code below this line
ReactDOMServer.renderToString(<App />);
```


**Fin**
