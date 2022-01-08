import React, { Fragment } from "react";
import Button from "./Button";
import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick(strAction) {
    let intCurrentState = this.state.counter;

    if ("+" === strAction) {
      intCurrentState = intCurrentState + 1;
    } else if ("-" === strAction) {
      intCurrentState = intCurrentState - 1;
      intCurrentState = intCurrentState > 0 ? intCurrentState : 0;
    } else {
      intCurrentState = 0;
    }

    this.setState((state, props) => {
      return { counter: intCurrentState };
    });
  }

  render() {
    return (
      <div>
        <div className="center-align">
          <Button name="+" handleClick={() => this.handleClick("+")} />
          <span>{this.state.counter}</span>
          <Button name="-" handleClick={() => this.handleClick("-")} />
        </div>
        <div className="center-align">
          <Button name="reset" handleClick={() => this.handleClick("reset")} />
        </div>
      </div>
    );
  }
}

export default Counter;
