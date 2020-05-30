import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "../components/AppNavbar";
import {
  // NavItem,
  Container,
  Col,
  Row
} from 'reactstrap';
import RegisterModal from '../components/auth/RegisterModal';
import "./Pages.css";
import writeImg from "../assets/write.png";
import headImg from "../assets/head.png";
import graphImg from "../assets/graph.png";

class HomePage extends Component {
  render() {
    return (
      <div class="home-page">
        <AppNavbar />
        <div class="main-content">
          <div className="description">
            <h2>sweep your mind clean from mental clutter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {/* <RegisterModal /> */}
          </div>
          <div className="cards">
            <Container>
              <Row>
                <Col className="card-columns">
                  <img class="img-responsive" src={writeImg} alt="write" />
                </Col>
                <Col className="card-columns">
                  <img src={headImg} alt="head" />
                </Col>
                <Col className="card-columns">
                  <img src={graphImg} alt="graph" />
                </Col>
              </Row>
            </Container>

          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
