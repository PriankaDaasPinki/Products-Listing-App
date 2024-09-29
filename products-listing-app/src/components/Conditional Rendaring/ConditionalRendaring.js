import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";


export default class ConditionalRendaring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const {isLoggedIn} = this.state;
    let element = isLoggedIn? <HomePage /> : <LoginPage />;
    return <div>{element}</div>;
  }
}
