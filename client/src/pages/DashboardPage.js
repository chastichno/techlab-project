import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import AppNavbar from "../components/AppNavbar";
import Heading from "../components/Heading";
import NotesList from "../components/NotesList";

class DashboardPage extends Component {

  render() {
    return (
      <div>
        <AppNavbar />
        <Container>

          <Heading text="Writing Dashboard"></Heading>
          {/* <ListGroup variant="flush">
            <ListGroup.Item>
              <img src={icon} alt="icon" width="32" height="32" />
        New prompt
            </ListGroup.Item>
            <ListGroup.Item>
              <img src={icon} alt="icon" width="32" height="32" />
        Timer: min
              <InputGroup size="sm" className="mb-3">
                <FormControl id="duration" type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="duration" onChange={this.onChange} />
              </InputGroup>

            </ListGroup.Item>
          </ListGroup> */}
          <Button variant="secondary" size="lg" href="/newnote" onClick={this.onClick}>
            Start your session
              </Button>
          <NotesList />

        </Container>
      </div>
    );
  }
};

export default DashboardPage;
