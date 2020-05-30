import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class MainPageJumbotron extends Component {
  render() {
    const style = {
      textAlign: "center"
    };
    return (
      <Jumbotron>
        <h1 style={style}>This is our web app!</h1>
        <p style={style}>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p style={style}>
          <Button variant="success" disabled>
            Register
          </Button>
        </p>
      </Jumbotron>
    );
  }
}

export default MainPageJumbotron;
