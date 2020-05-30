import React, { Component } from "react";
import { Link } from "react-navi";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import icon from "../assets/logo_icon.png";


class NavigationBar extends Component {
  state = {
    isLoggedIn: true
  }
  render() {
    return (
      <Navbar color="#FCF6F5" expand="lg">
        <img
          src={icon}
          alt="icon"
          style={{ marginRight: "10px", width: 50, height: 50 }}
        />
        <Link href="/">
          <Navbar.Brand>Free writing</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {this.state.isLoggedIn ? (
            <Navbar.Text className="mr-sm-2">
              <div border="1px solid black">
                <a href="#login" display="block">{this.props.userName}</a>
              </div>
            </Navbar.Text>
          ) : (
              <Form inline>
                <FormControl
                  type="email"
                  placeholder="Email"
                  className="mr-sm-2"
                />
                <FormControl
                  type="password"
                  placeholder="Password"
                  className="mr-sm-2"
                />
                <Link href="/dashboard">
                  <Button variant="outline-secondary">Log in</Button>
                </Link>
              </Form>
            )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
