
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

##  Combine Multiple Reducers
One of the few challanges that have good examples and good instructions.
```Redux
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth:  authReducer
});// define the root reducer here
const store = Redux.createStore(rootReducer);
```

## Send Action Data to the Store
back to poor instructions and no clear examples.
```Redux
const ADD_NOTE = 'ADD_NOTE';
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line
     case ADD_NOTE:
         state = action.text;
         return state;

    // change code above this line
    default:
      return state;
  }
};
const addNoteText = (note) => {
  // change code below this line
    return {
     type: ADD_NOTE,
     text: note
   };
  // change code above this line
};
const store = Redux.createStore(notesReducer);
console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

## Use Middleware to Handle Asynchronous Actions
back to poor instructions and no clear examples.
```Redux
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'
const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }
const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here
      dispatch(receivedData(data));
    }, 2500);
  }
};
const defaultState = {
  fetching: false,
  users: []
};
const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      console.log('req!!')
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
// store.dispatch(handleAsync())
store.subscribe(()=>{
  console.log(store.getState())
});
```

## Send Action Data to the Store
Worst one yet!!! poor instructions and no clear examples expects you to look at past challanges.
```Redux
const INCREMENT = 'INCREMENT'; // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types
const counterReducer = (state = 0, action) => {
  switch(action.type){
  case INCREMENT: 
    return state + 1;
    break;
  case DECREMENT : 
    return state -1;
    break;
  default: 
    return state;
  }  
}; // define the counter reducer which will increment or decrement the state based on the action it receives
const incAction = () => {
  return {
    type : INCREMENT
  }
}; // define an action creator for incrementing
const decAction = () => {  
  return {
    type: DECREMENT
  }  
}; // define an action creator for decrementing
const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers
```

## Never Mutate State
Instructions are unclear and no examples.
Finish writing the ADD_TO_DO case in the reducer to append a new to-do to the state. 
```Redux
const ADD_TO_DO = 'ADD_TO_DO';
// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      let a = state.map((item)=>item);
      a.push(action.todo);
      return a;
    default:
      return state;
  }
};
// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}
const store = Redux.createStore(immutableReducer);
```

## Use the Spread Operator on Arrays
Instructions are ok and example could have been better...
Use the spread operator to return a new copy of state when a to-do is added. 
```Redux
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // don't mutate state here or the tests will fail
      return [...state, action.todo];
    default:
      return state;
  }
};
const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
};
const store = Redux.createStore(immutableReducer);
```
