import React, { Component } from "react";

class Heading extends Component {
  render() {
    const borderStyle = {
      borderStyle: "ridge",
      padding: "15px 28px",
    };
    return <h4 style={borderStyle}>{this.props.text}</h4>;
  }
}

export default Heading;
