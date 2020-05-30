import React, { Component } from "react";
import Button from "react-bootstrap/Button";


class MyButton extends Component {
  render() {
    const style = {
      marginLeft: "25px",
    };
    return (
      <Button variant="secondary" size="lg" disabled style={style} href={this.props.hrefName}>
        {this.props.text}
      </Button>
    );
  }
}

export default MyButton;
