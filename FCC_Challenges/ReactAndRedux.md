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
