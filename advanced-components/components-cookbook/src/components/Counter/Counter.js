import PropTypes from 'prop-types';
import React, { Component } from "react";

const counterStyle = {
  width: '50px',
  textAlign: 'center',
  backgroundColor: 'aliceblue',
  padding: '10px',
};

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue
    };
  }

  decrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  }

  increment = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  }

  render() {
    return (
      <div style={counterStyle}>
        {this.state.value}
        <p>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </p>
      </div>
    );
  }
}

export default Counter;
