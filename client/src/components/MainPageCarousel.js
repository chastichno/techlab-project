import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import img2 from "../assets/carousel_img_2.jpg";

class MainPageCarousel extends Component {
  render() {
    const imageStyle = {
      height: 400,
    };
    return (
      <Carousel>
        <Carousel.Item>
          <img
            style={imageStyle}
            className="d-block w-100"
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imageStyle}
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imageStyle}
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MainPageCarousel;
