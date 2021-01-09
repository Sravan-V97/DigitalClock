import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Analog from "./components/analogClock/analog";

function ClockSwitch(props) {
  if (props.value) {
    return <App />;
  }
  return <Analog />;
}

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: true };
  }

  handleClick = () => {
    this.setState({
      value: !this.state.value,
    });
  };

  render() {
    return (
      <div class="wrap" style={{textAlign:"center"}}>
        <button class="btn first" style={{marginTop :"15vh"}} onClick={this.handleClick}><i class="fa fa-bullseye" aria-hidden="true"></i></button>
        <ClockSwitch value={this.state.value} />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Btn />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
