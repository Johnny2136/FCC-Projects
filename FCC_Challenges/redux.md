
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
