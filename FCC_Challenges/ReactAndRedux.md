## Getting Started with React Redux
This should be a nice review of what you learned in the React lessons.(Just shoot me now!!!)
Start with a DisplayMessages component. Add a constructor to this component and initialize it with a state that has two properties: input, that's set to an empty string, and messages, that's set to an empty array.
[React Redux this.props.getClasses is not a function](https://stackoverflow.com/questions/50835770/react-redux-this-props-getclasses-is-not-a-function)
```javascript
class DisplayMessages extends React.Component {
  // change code below this line
    constructor(props){
      super(props);
      this.state = {
        input:"",
        messages:[]
      }
    };    
  // change code above this line
  render() {
    return <div />
  }
};
```

## React and Redux: Manage State Locally First
WORST one YET!!!(Just shoot me now!!!)
* First, in the render() method, have the component render an input element, button element, and ul element. When the input element changes, it should trigger a handleChange() method. Also, the input element should render the value of input that's in the component's state. The button element should trigger a submitMessage() method when it's clicked.

* Second, write these two methods. The handleChange() method should update the input with what the user is typing. The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

* Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.
* [React Redux youTube Video on this challange](https://www.youtube.com/watch?v=PPt0AS3RQ2Q)
```javascript
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange=this.handleChange.bind(this)//had to bind handleChange
    this.submitMessage=this.submitMessage.bind(this)//had to bind submitMessage
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value
    })    
  }
  submitMessage(){
    this.setState({
      messages: [...this.state.messages,this.state.input],
      input: ''
    })    
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
          <input value={this.state.input} onChange={this.handleChange}/>

          <button onClick={this.submitMessage}>Submit</button>
          <ul>
          {this.state.messages.map(message => <li key={Date}>{message}</li>)}
          </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
```

## Extract State Logic to Redux
Another bad one!
* First, define an action type 'ADD' and set it to a const ADD. Next, define an action creator addMessage() which creates the action to add a message. You'll need to pass a message to this action creator and include the message in the returned action.

* Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.
* [Thanks to user kamifun](https://forum.freecodecamp.org/t/extract-state-logic-to-redux-4/204166)
```javascript
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';
let initialStatus = [];
let addMessage = (message) => {
    return {
        type: ADD,
        message: message
    };
};
//originally tried to use "defaltStatus" this fails.
let messageReducer = (state = initialStatus, action) => {
    switch(action.type) {
        case ADD:
            return [...state, action.message];
            break;
        default: 
            return state;
    };
};
const store = Redux.createStore(messageReducer);
```

## Use Provider to Connect Redux to React
This one wasnt too bad... (one change I would make is:)

**Example:**
```javascript
render(){
    return(
      <Provider store={store}>
      <App/>
      </Provider>
    );
   };
 ```
* The code editor now shows all your Redux and React code from the past several challenges. It includes the Redux store, actions, and the DisplayMessages component. The only new piece is the AppWrapper component at the bottom. Use this top level component to render the Provider from ReactRedux, and pass the Redux store as a prop. Then render the DisplayMessages component as a child. Once you are finished, you should see your React component rendered to the page.

* Note: React Redux is available as a global variable here, so you can access the Provider with dot notation. The code in the editor takes advantage of this and sets it to a constant Provider for you to use in the AppWrapper render method.
* [Can't get store from context #193](https://github.com/reduxjs/react-redux/issues/193)
```javascript
// Redux Code:
const ADD = 'ADD';
const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
const store = Redux.createStore(messageReducer);

// React Code:
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
const Provider = ReactRedux.Provider;
class AppWrapper extends React.Component {
  // render the Provider here
    render(){
    return(
      <Provider store={store}>
        <DisplayMessages/>
      </Provider>
    );
  };
  // change code above this line
};
```

## Extract State Logic to Redux
Finally an easy one!
* Create a function mapStateToProps(). This function should take state as an argument, then return an object which maps that state to specific property names. These properties will become accessible to your component via props. Since this example keeps the entire state of the app in a single array, you can pass that entire state to your component. Create a property messages in the object that's being returned, and set it to state.
* [Review Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
```javascript
const state = [];
// change code below this line
/*()
//First attempt but not efficient...
function mapStateToProps(state) {
  return {
    messages: state
  }
};
*/
let mapStateToProps = (state) => {return {messages: state}};
```

## Map Dispatch to Props
This one had an ok example!
```javascript
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```
* The code editor provides an action creator called addMessage(). Write the function mapDispatchToProps() that takes dispatch as an argument, then returns an object. The object should have a property submitNewMessage set to the dispatch function, which takes a parameter for the new message to add when it dispatches addMessage().
* [React and Redux: Map Dispatch to Props](https://learn.freecodecamp.org/front-end-libraries/react-and-redux/map-dispatch-to-props/)
```javascript
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};
// change code below this line
let mapDispatchToProps=(dispatch)=>{
    return {
        submitNewMessage: function(message) {
            dispatch(addMessage(message));
        }
    }
};
```

## Connect Redux to React
This one didnt have A real good example so I recommend!
```javascript
const variableName = connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]); 
```
* The code editor has the `mapStateToProps()` and `mapDispatchToProps()` functions and a new React component called `Presentational`. Connect this component to Redux with the `connect` method from the ReactRedux global object, and call it immediately on the `Presentational` component. Assign the result to a new `const` called `ConnectedComponent` that represents the connected component. That's it, now you're connected to Redux! Try changing either of connect's arguments to `null` and observe the test results.
* [React and Redux: API info](https://github.com/reduxjs/react-redux/blob/master/docs/api.md)
```javascript
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};
const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};
class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};
const connect = ReactRedux.connect;
// change code below this line
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```

# Connect Redux to the Messages App
This one didnt have an example so I recommend!
```javascript
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```
and
```javascript
render() {
    return (
      <Provider store = {store}>
      <Container />
      </Provider>
    );
  }
  ```
* The code editor has all the code you've written in this section so far. The only change is that the React component is renamed to `Presentational`. Create a new component held in a constant called `Container` that uses `connect` to connect the `Presentational` component to Redux. Then, in the `AppWrapper`, render the React Redux `Provider` component. Pass `Provider` the Redux store as a `prop` and `render` Container as a child. Once everything is setup, you will see the messages app rendered to the page again.
* [How to use Redux's Provider with React](https://stackoverflow.com/questions/35864957/how-to-use-reduxs-provider-with-react)
```javascript
// Redux:
const ADD = 'ADD';
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
const store = Redux.createStore(messageReducer);
// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
// define the Container component here:
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (
      <Provider store = {store}>
      <Container />
      </Provider>
    );
  }
};
```

## Extract Local State into Redux
Once again back to missguiding instructions and no examples worked for a long time on this. TOTALLY TERRIBLE!
* In the Presentational component, first, remove the messages property in the local state. These messages will be managed by Redux. Next, modify the submitMessage() method so that it dispatches submitNewMessage() from this.props, and pass in the current message input from local state as an argument. Because you removed messages from local state, remove the messages property from the call to this.setState() here as well. Finally, modify the render() method so that it maps over the messages received from props rather than state.

* Once these changes are made, the app will continue to function the same, except Redux manages the state. This example also illustrates how a component may have local state: your component still tracks user input locally in its own state. You can see how Redux provides a useful state management framework on top of React. You achieved the same result using only React's local state at first, and this is usually possible with simple apps. However, as your apps become larger and more complex, so does your state management, and this is the problem Redux solves.


```Javascript
// Redux:
const ADD = 'ADD';
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
const store = Redux.createStore(messageReducer);
// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      //messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState({
      input: '',
      //messages: this.state.messages.concat(this.state.input)
    });
    this.props.submitNewMessage(this.state.input);
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul> 
          {this.props.messages.map((message, idx) => { //changed state to props
              return (
                 <li key={idx}>{message}</li>
              );
            })
          };
        </ul>
      </div>
    );
  };
};
// Change code above this line
const mapStateToProps = (state) => {
  return {messages: state}
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

## Extract Local State into Redux
OMG I totally spent 2 hours trying to get this!!! TOTALLY TERRIBLE!
* Congratulations! You finished the lessons on React and Redux. There's one last item worth pointing out before you move on. Typically, you won't write React apps in a code editor like this. This challenge gives you a glimpse of what the syntax looks like if you're working with npm and a file system on your own machine. The code should look similar, except for the use of import statements (these pull in all of the dependencies that have been provided for you in the challenges). The "Managing Packages with npm" section covers npm in more detail.

Finally, writing React and Redux code generally requires some configuration. This can get complicated quickly. If you are interested in experimenting on your own machine, the

[Create React App](https://github.com/facebook/create-react-app) comes configured and ready to go.

Alternatively, you can enable Babel as a JavaScript Preprocessor in [CodePen](https://codepen.io/), add React and ReactDOM as external JavaScript resources, and work there as well.


**Log the message 'Now I know React and Redux!' to the console.**

```Javascript
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider, connect } from 'react-redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import rootReducer from './redux/reducers'
// import App from './components/App'

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );

// change code below this line
console.log('Now I know React and Redux!');//Added this to make test pass?????
```
