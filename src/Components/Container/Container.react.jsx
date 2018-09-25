import React from "react";
import "./Container";

class AppContainer extends React.Component {
  render() {
    return (
      <div className="app">
        My App
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
