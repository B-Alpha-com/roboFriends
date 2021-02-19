import React, { Component } from "react";

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorHandler: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ errorHandler: true });
  }
  render() {
    const { errorHandler } = this.state;
    return errorHandler === true ? (
      <h1>we will fix it</h1>
    ) : (
      this.props.children
    );
  }
}
export default ErrorHandler;
