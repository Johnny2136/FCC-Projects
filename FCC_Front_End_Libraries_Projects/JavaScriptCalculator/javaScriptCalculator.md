# Using [ReactJS template](https://codepen.io/johnny2136/pen/oPGxzY)

## HTML
```html
<body>
<div id="wrapper">
  <header><h1> JavaScript Calculator </h1></header>
  <div id="root"></div><br/>
  <footer>
  <a class="github-button" href="https://github.com/johnny2136" data-size="large" aria-label="Follow @johnny2136 on GitHub">Follow @johnny2136</a>
  </footer>
</div>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>
</body>
```

## SCSS
```css
$button: #707070;

body {
  background: #9f6eef; 
}

header{
  width:auto;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 30px;
  color: #990077;
  text-align: center;
}

footer{
  width:auto;
  text-align: center;
}

#root {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calculator {
  border: 10px solid #d6c9db;
  border-radius: 25px;
  padding: 10px; 
  background: #350947;
  width: 320px; 
  position: relative;
}

.formulaScreen {
  border: 1px solid #d6c9db;
  border-radius: 15px;
  font-size: 20px;
  color: #07ef31;
  text-align: right;
  line-height: 35px;
  word-wrap: break-word; 
}

.outputScreen {
  border: 1px solid #d6c9db;
  border-radius: 15px;
  font-size: 29px;
  font-family: digital;
  color: #07ef31;
  text-align: right;
  line-height: 35px;
}

button {
  position: relative;
  height: 65px;
  width: 80px;
  color: white;
  border: solid black 2px;
  border-radius: 45%;
  background: $button;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #d586f4;
    border: solid #d586f4 2px;
    border-radius: 45%;
  }
}

.lg {
  width: 160px;
}
```

## ReactJS

```JavaScript
// constants and variables
const isOp = /[x/+‑]/,
   endsWithOp = /[x+‑/]$/,
   clStyle = { background: "#870202" },
   opStyle = { background: "#425982" },
   eqStyle = {
      background: "#026026",
      position: "absolute",
      height: 130,
      bottom: 5
   };

const Output = props => {
   return (
      <div id="display" className="outputScreen">
         {props.currentValue}
      </div>
   );
}; //calc display

const Formula = props => {
   return (
      <div className="formulaScreen" style={{ minHeight: 15 }}>
         {props.formula}
      </div>
   );
}; //formula display

const App = () => (
   <div>
      <Calculator />
   </div>
);

// classes and handlers
class Calculator extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         currentVal: "0",
         previousVal: "0",
         formula: "",
         currentSign: "pos",
         lastClicked: ""
      };
      this.maxNumber = this.maxNumber.bind(this);
      this.handleOperators = this.handleOperators.bind(this);
      this.handleEvaluate = this.handleEvaluate.bind(this);
      this.initialize = this.initialize.bind(this);
      this.handleDecimal = this.handleDecimal.bind(this);
      this.handleNumbers = this.handleNumbers.bind(this);
   } //constructor group

   maxNumber() {
      this.setState({
         currentVal: "Exceed Number Limit",
         previousVal: this.state.currentVal
      });
      setTimeout(() => this.setState({ currentVal: this.state.previousVal }), 1000);
   } //max number warning.

   handleEvaluate() {
      if (!this.state.currentVal.includes("Limit")) {
         let expression = this.state.formula;
         if (endsWithOp.test(expression)) expression = expression.slice(0, -1);
         expression = expression.replace(/x/g, "*").replace(/‑/g, "-");
         let answer =
            Math.round(1000000000000 * eval(expression)) / 1000000000000;
         this.setState({
            currentVal: answer.toString(),
            formula:
               expression.replace(/\*/g, "⋅").replace(/-/g, "‑") + "=" + answer,
            previousVal: answer,
            evaluated: true
         });
      }
   } //handles formula evaluation.

   handleOperators(e) {
      if (!this.state.currentVal.includes("Limit")) {
         this.setState({ currentVal: e.target.value, evaluated: false });
         if (this.state.formula.includes("=")) {
            this.setState({ formula: this.state.previousVal + e.target.value });
            // Stores the result of the evaluation, if operated on, allowing the operation to be appended to  formula user story number 13
         } else {
            this.setState({
               // Stores the formula previous value before first operator is entered to allow for switching of operators before the next element user story number 13
               previousVal: !isOp.test(this.state.currentVal)
                  ? this.state.formula
                  : this.state.previousVal,
               formula: !isOp.test(this.state.currentVal)
                  ? (this.state.formula += e.target.value)
                  : (this.state.previousVal += e.target.value)
            });
         }
      }
   }

   handleNumbers(e) {
      if (!this.state.currentVal.includes("Limit")) {
         this.setState({ evaluated: false });
         if (this.state.currentVal.length > 20) {
            this.maxNumber();
         } else if (this.state.evaluated === true) {
            this.setState({
               currentVal: e.target.value,
               formula: e.target.value != "0" ? e.target.value : ""
            });
         } else {
            this.setState({
               currentVal:
                  this.state.currentVal == "0" ||
                  isOp.test(this.state.currentVal)
                     ? e.target.value
                     : this.state.currentVal + e.target.value,
               formula:
                  this.state.currentVal == "0" && e.target.value == "0"
                     ? this.state.formula
                     : /([^.0-9]0)$/.test(this.state.formula)
                       ? this.state.formula.slice(0, -1) + e.target.value
                       : this.state.formula + e.target.value
            });
         }
      }
   }

   handleDecimal() {
      if (this.state.evaluated === true) {
         this.setState({
            currentVal: "0.",
            formula: "0.",
            evaluated: false
         });
      } else if (
         !this.state.currentVal.includes(".") &&
         !this.state.currentVal.includes("Limit")
      ) {
         this.setState({ evaluated: false });
         if (this.state.currentVal.length > 20) {
            this.maxNumber();
         } else if (
            endsWithOp.test(this.state.formula) ||
            (this.state.currentVal == "0" && this.state.formula === "")
         ) {
            this.setState({
               currentVal: "0.",
               formula: this.state.formula + "0."
            });
         } else {
            this.setState({
               currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + ".",
               formula: this.state.formula + "."
            });
         }
      }
   }

   initialize() {
      this.setState({
         currentVal: "0",
         previousVal: "0",
         formula: "",
         currentSign: "pos",
         lastClicked: ""
      });
   }

   render() {
      return (
         <div>
            <div className="calculator">
               <Formula
                  id="display"
                  formula={this.state.formula.replace(/x/g, "⋅")}
               />
               <Output id="display" currentValue={this.state.currentVal} />
               <Buttons
                  evaluate={this.handleEvaluate}
                  operators={this.handleOperators}
                  initialize={this.initialize}
                  decimal={this.handleDecimal}
                  numbers={this.handleNumbers}
               />
            </div>
         </div>
      );
   }
} //end of app

class Buttons extends React.Component {
   render() {
      return (
         <div>
            <button
               id="clear"
               value="AC"
               onClick={this.props.initialize}
               className="lg"
               style={clStyle}
            >
               AC
            </button>
            <button
               id="divide"
               value="/"
               onClick={this.props.operators}
               style={opStyle}
            >
               /
            </button>
            <button
               id="multiply"
               value="x"
               onClick={this.props.operators}
               style={opStyle}
            >
               x
            </button>
            <button id="seven" value="7" onClick={this.props.numbers}>
               7
            </button>
            <button id="eight" value="8" onClick={this.props.numbers}>
               8
            </button>
            <button id="nine" value="9" onClick={this.props.numbers}>
               9
            </button>
            <button
               id="subtract"
               value="‑"
               onClick={this.props.operators}
               style={opStyle}
            >
               -
            </button>
            <button id="four" value="4" onClick={this.props.numbers}>
               4
            </button>
            <button id="five" value="5" onClick={this.props.numbers}>
               5
            </button>
            <button id="six" value="6" onClick={this.props.numbers}>
               6
            </button>
            <button
               id="add"
               value="+"
               onClick={this.props.operators}
               style={opStyle}
            >
               +
            </button>
            <button id="one" value="1" onClick={this.props.numbers}>
               1
            </button>
            <button id="two" value="2" onClick={this.props.numbers}>
               2
            </button>
            <button id="three" value="3" onClick={this.props.numbers}>
               3
            </button>
            <button
               id="zero"
               value="0"
               onClick={this.props.numbers}
               className="lg"
            >
               0
            </button>
            <button id="decimal" value="." onClick={this.props.decimal}>
               .
            </button>
            <button
               id="equals"
               value="="
               onClick={this.props.evaluate}
               style={eqStyle}
            >
               =
            </button>
         </div>
      );
   }
} //renders buttons
//cut from here
ReactDOM.render(<App />, document.getElementById("root"));

// Resources:
// https://www.freeformatter.com/regex-tester.html:
// https://github.com/alvarotrigo/fullPage.js/issues/854
// https://www.google.com/search?q=%234d4d4d&oq=%234d4d4d&aqs=chrome..69i57j69i61&sourceid=chrome&ie=UTF-8
// https://www.w3schools.com/cssref/css_websafe_fonts.asp
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
// https://medium.com/@krissanawat/create-a-simple-calculator-app-in-react-742022250d8f
// https://regexr.com/
```
## CodePen here [https://codepen.io/johnny2136/pen/jvppEM](https://codepen.io/johnny2136/pen/jvppEM)


