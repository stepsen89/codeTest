import "./IncrementButton.css";
import React from "react";

class IncrementButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counterValue: 0, otherValue: 89 };

    this.whenButtonPressed = this.whenButtonPressed.bind(this);
  }

  componentDidMount() {
    console.log("The component now successfully exists");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("The new value: ", this.state.counterValue);
  }

  whenButtonPressed() {
    this.setState({
      counterValue: this.state.counterValue + 1,
    });
  }

  render() {
    return (
      <>
        <button className="incrementButton" onClick={this.whenButtonPressed}>
          {this.state.counterValue}
        </button>
      </>
    );
  }
}

export default IncrementButton;
