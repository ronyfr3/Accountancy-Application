import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { error: null };
  }
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return (
      <div className="errorror">
        {this.state.error ? (
          <div className="errcss">
            <h1>Failed to load resorces!!</h1>
            <small>Please check your internet connection!</small>
          </div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
export default ErrorBoundary;
