import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addItemInCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  removeItemFromCart = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="sateButton">
        <Button onClick={this.addItemInCart}>+</Button>
        <div className="btn"> {count}</div>
        <Button
          onClick={this.removeItemFromCart}
          disabled={count === 0 ? true : false}
        >
          -
        </Button>
      </div>
    );
  }
}
