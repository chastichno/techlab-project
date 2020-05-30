import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import icon from "../assets/triangulo-3d-png-2.png";


class List extends Component {
  render() {

    return (
      <ListGroup variant="flush">
        <ListGroup.Item>
          <img src={icon} alt="icon" width="32" height="32" />
        New prompt <Badge variant="secondary">Adjust</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          <img src={icon} alt="icon" width="32" height="32" />
        Timer: min <Badge variant="secondary">Adjust</Badge>

        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default List;
