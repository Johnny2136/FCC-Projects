## HTML
```HTML
<link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
<body>
  <div id='container'>
    <div id='app'></div>
  </div>
  <footer>
    <a class="github-button" href="https://github.com/johnny2136" data-size="large" aria-label="Follow @johnny2136 on GitHub">Follow @johnny2136</a>
  </footer>
  <script async defer src="https://buttons.github.io/buttons.js"></script>
</body>
```

## CSS
```css
body {
  background: #9e161c;
  color: white;
  font-size: 25px;
  text-align: center;
  #container {
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
    .main-title {
      font: 200 50px/2.5 "Pacifico", Helvetica, sans-serif;
      color: #fff;
      text-shadow: 3px 3px 0px rgba(0, 0, 0, 2.5),
        7px 7px 0px rgba(0, 0, 0, 0.05);
      font-size: 75px;
      margin-bottom: 3px;
    }
    .length-control {
      width: 250px;
    }
    button {
      background: none;
      outline: black;
      border: none;
      color: green;
      cursor: pointer;
      text-shadow: 1px 2px 2px #000;
    }
    .btn-level,    
    .length-control {
      color: #fff;
      padding:10px;
      display: inline-block;
    }
    .timer {
      border: 10px solid green;
      box-shadow: 1px 5px 1px #000;
      margin: 25px auto 20px auto;
      width: 250px;
      height: 250px;
      border-radius: 100%;
      .timer-wrapper {
        top: 70%;
      }
      #time-left {
        font-size: 80px;
      }      
    }
  }
}
footer {
  width: auto;
  padding: 175px;
  float: botton;
}
```

## JavaScript
```javascript
//REACT & REDUX LIBRARIES SET UP
//REACT & REDUX LIBRARIES SET UP
class TimerLengthControl extends React.Component {
  render() {
    return (
      <div className="length-control">
        <div id={this.props.titleID}>{this.props.title}</div>
        <button
          id={this.props.minID}
          className="btn-level"
          value="-"
          onClick={this.props.onClick}
          >
          <i className="fa fa-minus fa-2x" />
        </button>
        <div id={this.props.lengthID} className="btn-level">
          {this.props.length}
        </div>
        <button
          id={this.props.addID}
          className="btn-level"
          value="+"
          onClick={this.props.onClick}
          >
          <i className="fa fa-plus fa-2x" />
        </button>
      </div>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brkLength: 5,
      sessLength: 25,
      timerState: "stopped",
      timerType: "Session",
      timer: 1500,
      intervalID: "",
      alarmColor: { color: "white" }
    };
    this.setBrkLength = this.setBrkLength.bind(this);
    this.setSessLength = this.setSessLength.bind(this);
    this.lengthControl = this.lengthControl.bind(this);
    this.timerControl = this.timerControl.bind(this);
    this.beginCountDown = this.beginCountDown.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
    this.warning = this.warning.bind(this);
    this.buzzer = this.buzzer.bind(this);
    this.switchTimer = this.switchTimer.bind(this);
    this.clockify = this.clockify.bind(this);
    this.reset = this.reset.bind(this);
  }
  setBrkLength(e) {
    this.lengthControl(
      "brkLength",
      e.currentTarget.value,
      this.state.brkLength,
      "Session"
    );
  }
  setSessLength(e) {
    this.lengthControl(
      "sessLength",
      e.currentTarget.value,
      this.state.sessLength,
      "Break"
    );
  }
  lengthControl(stateToChange, sign, currentLength, timerType) {
    if (this.state.timerState == "running") return;
    if (this.state.timerType == timerType) {
      if (sign == "-" && currentLength != 1) {
        this.setState({ [stateToChange]: currentLength - 1 });
      } else if (sign == "+" && currentLength != 60) {
        this.setState({ [stateToChange]: currentLength + 1 });
      }
    } else {
      if (sign == "-" && currentLength != 1) {
        this.setState({
          [stateToChange]: currentLength - 1,
          timer: currentLength * 60 - 60
        });
      } else if (sign == "+" && currentLength != 60) {
        this.setState({
          [stateToChange]: currentLength + 1,
          timer: currentLength * 60 + 60
        });
      }
    }
  }
  timerControl() {
    let control =
        this.state.timerState == "stopped"
    ? (this.beginCountDown(), this.setState({ timerState: "running" }))
    : (this.setState({ timerState: "stopped" }),
       this.state.intervalID && this.state.intervalID.cancel());
  }
  beginCountDown() {
    this.setState({
      intervalID: accurateInterval(() => {
        this.decrementTimer();
        this.phaseControl();
      }, 1000)
    });
  }
  decrementTimer() {
    this.setState({ timer: this.state.timer - 1 });
  }
  phaseControl() {
    let timer = this.state.timer;
    this.warning(timer);
    this.buzzer(timer);
    if (timer < 0) {
      this.state.timerType == "Session"
        ? (this.state.intervalID && this.state.intervalID.cancel(),
           this.beginCountDown(),
           this.switchTimer(this.state.brkLength * 60, "Break"))
      : (this.state.intervalID && this.state.intervalID.cancel(),
         this.beginCountDown(),
         this.switchTimer(this.state.sessLength * 60, "Session"));
    }
  }
  warning(_timer) {
    let warn =
        _timer < 61
    ? this.setState({ alarmColor: { color: "green" } })
    : this.setState({ alarmColor: { color: "white" } });
  }
  buzzer(_timer) {
    if (_timer === 0) {
      this.audioBeep.play();
    }
  }
  switchTimer(num, str) {
    this.setState({
      timer: num,
      timerType: str,
      alarmColor: { color: "white" }
    });
  }
  clockify() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  }
  reset() {
    this.setState({
      brkLength: 5,
      sessLength: 25,
      timerState: "stopped",
      timerType: "Session",
      timer: 1500,
      intervalID: "",
      alarmColor: { color: "white" }
    });
    this.state.intervalID && this.state.intervalID.cancel();
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }
  render() {
    return (
      <div>
        <div className="main-title">Pomodoro Clock</div>
        <TimerLengthControl
          titleID="break-label"
          minID="break-decrement"
          addID="break-increment"
          lengthID="break-length"
          title="Break Length"
          onClick={this.setBrkLength}
          length={this.state.brkLength}
          />
        <TimerLengthControl
          titleID="session-label"
          minID="session-decrement"
          addID="session-increment"
          lengthID="session-length"
          title="Session Length"
          onClick={this.setSessLength}
          length={this.state.sessLength}
          />
        <div className="timer" style={this.state.alarmColor}>
          <div className="timer-wrapper">
            <div id="timer-label">
              <br />
              {this.state.timerType}
            </div>
            <br />
            <div id="time-left">{this.clockify()}</div>
          </div>
        </div>
        <div className="timer-control">
          <button id="start_stop"  onClick={this.timerControl}>
            <i className="fa fa-play fa-3x" />
            <i className="fa fa-pause fa-3x" />
          </button>
          <button id="reset" onClick={this.reset}>
            <i className="fa fa-refresh fa-3x" />
          </button>
        </div>
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/Johnny2136/FCC-Projects/master/images/ambulancelip36.wav"
          ref={audio => {
            this.audioBeep = audio;
          }}
          />
      </div>
    );
  }
}
ReactDOM.render(<Timer />, document.getElementById("app"));

//Acurate timeing curtisy of Accurate_Interval.js
// Thanks Squeege! For the elegant answer provided to this question:
// http://stackoverflow.com/questions/8173580/setinterval-timing-slowly-drifts-away-from-staying-accurate
// Github: https://gist.github.com/Squeegy/1d99b3cd81d610ac7351
// Slightly modified to accept 'normal' interval/timeout format (func, time).    */
(function() {
  window.accurateInterval = function(fn, time) {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date().getTime() + time;
    timeout = null;
    wrapper = function() {
      nextAt += time;
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      return fn();
    };
    cancel = function() {
      return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
      cancel: cancel
    };
  };
}.call(this));
```

## Added to CodePen Resources:

### HTML
* None

### CSS
* https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

### JavaScript
* https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react.js
* https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react-dom.js
* https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js


