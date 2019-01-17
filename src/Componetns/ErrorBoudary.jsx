import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // this.setState({ hasError: true });
    console.log("err", error);
    console.log("info", info);
  }

  render() {
    if (this.state.hasError) return <div>Error!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
