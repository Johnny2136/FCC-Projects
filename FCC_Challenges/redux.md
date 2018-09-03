
## Create a Redux Store
```redux
const reducer = (state = 5) => {
  return state;
}
// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
var  store;
store = Redux.createStore(reducer);
```

## Get State from the Redux Store
```Redux
const store = Redux.createStore(
  (state = 5) => state
);
// change code below this line
let currentState =  store.getState();
```

## Define a Redux Action
```redux
// Define an action here:
const action={
  type:'LOGIN'
};
```

## Define an Action Creator
no clear instruction or example took some time
see: https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/
```redux
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator(action){
    return {
        type: LOGIN,
    action
    };
};
```

## Dispatch an Action Event
Nice Example on this one.
```Redux
const store = Redux.createStore(
  (state = {login: false}) => state
);
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
// Dispatch the action here:
store.dispatch(loginAction());
store.dispatch({ type: 'LOGIN' });
```

## Handle an Action in the Store
no examples what so ever, but the instructions gave hints.
```Redux
const defaultState = {
  login: false
};
const reducer = (state = defaultState, action) => {
  // change code below this line
    if(action.type === 'LOGIN'){
      return {login: true}
    } return state;
  // change code above this line
};
const store = Redux.createStore(reducer);
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

## Use a Switch Statement to Handle Multiple Actions
no examples what so ever, and the instructions didnt help.
```Redux
const defaultState = {
  authenticated: false
};
const authReducer = (state = defaultState, action) => {
  // change code below this line
   switch(action.type) {
    case 'LOGIN': 
      return {authenticated: true};
    case 'LOGOUT': 
      return {authenticated: false};
    default: 
      return state;
    }
  // change code above this line
};
const store = Redux.createStore(authReducer);
const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};
const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

## Use const for Action Types
no examples what so ever, and the instructions were missleading.
So really read this: "Then, edit the authReducer() and the action creators to reference these constants instead of string values."
```Redux
// change code below this line
const LOGIN = 'LOGIN' 
const LOGOUT = 'LOGOUT'
// change code above this line
const defaultState = {
  authenticated: false
};
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN://wasn't marked but change this...
      return {
        authenticated: true
      }
    case LOGOUT://wasn't marked but change this...
      return {
        authenticated: false
      }
    default:
      return state;
  }
};
const store = Redux.createStore(authReducer);
const loginUser = () => {
  return {
    type: LOGIN //wasn't marked but change this...
  }
};
const logoutUser = () => {
  return {
    type: LOGOUT //wasn't marked but change this...
  }
};
```

## Register a Store Listener
no examples what so ever, and the instructions were crap.

```Redux
const ADD = 'ADD';
const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};
const store = Redux.createStore(reducer);
// global count variable:
let count = 0;
// change code below this line
const incrementCounter = () => count +=1 
store.subscribe(incrementCounter);
// change code above this line
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```
